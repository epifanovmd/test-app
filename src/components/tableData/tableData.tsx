import React, {Component} from "react";
import {TableCellSection} from "../tableCellSection/tableCellSection";

import "./styles.scss";
import {IData, IGroupsList} from "../../modules/DataPage/dataPageState";
import {TableRowSection} from "../tableRowSection/tableRowSection";
import moment from "moment";

interface IProps {
  groupLists: IGroupsList;
  data: IData[];
}

interface IState {
  openNameList: string[];
  levels: number[];
}

export class TableData extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openNameList: [],
      levels: [],
    };
  }

  render(): JSX.Element {
    const {data, groupLists} = this.props;

    return (
      <div className="tableData container">
        <div className="tableData__rows">
          {this.insertRows()}
          {
            data.map((dataItem, index) => (
              <TableRowSection
                removeCloseName={this.onRemoveCloseNameList}
                setOpenName={this.onSetOpenNameList}
                key={index}
                data={dataItem}
              />
            ))
          }
        </div>
        {this.getTable({data, groupLists})}
      </div>
    );
  }

  private insertRows = () => {
    const {levels} = this.state;
    const countLoop = Math.max(...levels) + 1;
    const arrRows = [];
    for (let i = 0; i < countLoop; i++) {
      arrRows.push(
        <div className="tableData__empty-row" />);
    }

    return arrRows;
  };

  private onSetLevel = (value: number) => {
    this.setState((state: IState) => ({levels: [...state.levels, value]}));
  };

  private onRemoveLevel = (value: number) => {
    setTimeout(() => {
      const {levels} = this.state;
      const findIndex = levels.indexOf(value);
      this.setState((state: IState) => ({levels: state.levels.filter(({}, index) => index !== findIndex)}));
    }, 0);
  };

  private onSetOpenNameList = (name: string) => {
    this.setState((state: IState) => ({openNameList: [...state.openNameList, name]}));
  };

  private onRemoveCloseNameList = (name: string) => {
    this.setState((state: IState) => ({openNameList: state.openNameList.filter(item => item !== name)}));
  };
  private getValues = (
    data: IData[],
    name: "listYearValues" | "listQuarterValues" | "listMonthValues" | "listDayValues",
    date: string,
  ): any => {
    const {openNameList} = this.state;
    const values = data.map(
      (item) => {
        const {listChild} = item;
        if (openNameList.some((itemName) => itemName === item.name)) {
          const listYearValuesChild = this.getValues(listChild, name, date);

          return this.flatten([item[name].find((itemFind) => itemFind.date === date) || [], listYearValuesChild]);
        } else {
          return [];
        }
      },
    );

    return this.flatten(values);
  };

  private flatten = (arr: any[]): any => {
    return arr.reduce((flat: any[], toFlatten: any[]) => {
      return flat.concat(Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten);
    }, []);
  };

  private getTable = (values: { groupLists: IGroupsList, data: IData[] }) => {
    const {groupLists: {listYears, listQuarters, listMonths, listDays}, data} = values;
    const {levels} = this.state;

    return (
      listYears.map((itemY, index) => (
        <TableCellSection
          level={1}
          offset={Math.max(...levels)}
          setLevel={this.onSetLevel}
          removeLevel={this.onRemoveLevel}
          className="tableData__sections-wrap"
          key={index}
          title={itemY.name}
          list={this.getValues(data, "listYearValues", itemY.date)}
        >
          {
            listQuarters.map((itemQ, indexQ) => (
              moment(itemY.date).year() === moment(itemQ.date).year() &&
              <TableCellSection
                level={2}
                offset={Math.max(...levels)}
                setLevel={this.onSetLevel}
                removeLevel={this.onRemoveLevel}
                key={indexQ}
                title={itemQ.name}
                list={this.getValues(data, "listQuarterValues", itemQ.date)}
              >
                {
                  listMonths.map((itemM, indexM) => (
                    (moment(itemQ.date).quarter() === moment(itemM.date).quarter() &&
                      moment(itemQ.date).year() === moment(itemM.date).year()) &&
                    <TableCellSection
                      level={3}
                      offset={Math.max(...levels)}
                      setLevel={this.onSetLevel}
                      removeLevel={this.onRemoveLevel}
                      key={indexM}
                      title={itemM.name}
                      list={this.getValues(data, "listMonthValues", itemM.date)}
                    >
                      {
                        listDays.map((itemD, indexD) => (
                          (moment(itemM.date).year() === moment(itemD.date).year() &&
                            moment(itemM.date).month() === moment(itemD.date).month()) &&
                          <TableCellSection
                            level={4}
                            offset={Math.max(...levels)}
                            setLevel={this.onSetLevel}
                            removeLevel={this.onRemoveLevel}
                            key={indexD}
                            disableOpen={true}
                            title={itemD.name}
                            list={this.getValues(data, "listDayValues", itemD.date)}
                          />
                        ))
                      }
                    </TableCellSection>
                  ))
                }
              </TableCellSection>
            ))
          }
        </TableCellSection>
      ))
    );
  };
}

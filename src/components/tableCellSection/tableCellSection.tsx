import React, {Component} from "react";
import {TableHeader} from "../table/tableHeader";
import {TableRow} from "../table/tableRow";
import {TableRowCell} from "../table/tableRowCell";
import {Table} from "../table/table";
import {IListValues} from "../../modules/DataPage/dataPageState";

import "./styles.scss";

interface IProps {
  level: number;
  offset: number;
  setLevel: (level: number) => void;
  removeLevel: (level: number) => void;
  className?: string;
  title: string;
  list: IListValues[];
  disableOpen?: boolean;
}

interface IState {
  isOpen: boolean;
}

export class TableCellSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount(): void {
    const {level, setLevel} = this.props;
    setLevel(level);
  }

  componentWillUnmount(): void {
    const {level, removeLevel} = this.props;
    removeLevel(level);
  }

  render(): JSX.Element {
    const {list, title, children, disableOpen, className} = this.props;
    const {isOpen} = this.state;

    return (
      <div className={`tableCellSection${className ? ` ${className}` : ""}`}>
        <div className="tableCellSection__header">
          <div className="tableCellSection__row">
            <div className="tableCellSection__title" onClick={this.toggleOpenSection}>{title}</div>
          </div>
        </div>
        {this.insertRows()}
        {
          isOpen && !disableOpen ?
            <div className="tableCellSection__sections">
              {children}
            </div> :
            <Table>
              <TableHeader>
                <TableRow>
                  <TableRowCell>План</TableRowCell>
                  <TableRowCell>Факт</TableRowCell>
                  <TableRowCell>Откл., %</TableRowCell>
                  <TableRowCell>Откл., абс.</TableRowCell>
                </TableRow>
              </TableHeader>

              {
                list.map((item, index) => (
                  <TableRow key={index}>
                    <TableRowCell>{item.plan}</TableRowCell>
                    <TableRowCell>{item.fact}</TableRowCell>
                    <TableRowCell>{`10,33 %`}</TableRowCell>
                    <TableRowCell>{item.plan - item.fact}</TableRowCell>
                  </TableRow>
                ))}

            </Table>
        }
      </div>
    );
  }

  private insertRows = () => {
    const {level, offset} = this.props;
    const {isOpen} = this.state;
    const countLoop = offset - level;
    const arrRows = [];
    for (let i = 0; i < countLoop; i++) {
      !isOpen && arrRows.push(
        <div className="tableData__empty-row" />);
    }

    return arrRows;
  };

  private toggleOpenSection = () => {
    React.Children.map(this.props.children, (item) => item).length > 0 &&
    this.setState((state: IState) => ({isOpen: !state.isOpen}));
  };
}

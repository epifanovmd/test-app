import React, {Component} from "react";
import {tableDataPageSelector} from "./dataPageSelector";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {TableData} from "../../components/tableData/tableData";

interface IProps {
}

type TProps =
  IProps &
  ReturnType<typeof tableDataPageSelector.mapState> &
  ReturnType<typeof tableDataPageSelector.mapDispatch> &
  RouteComponentProps<IRouteParams>;

interface IRouteParams {
  id: string;
}

class TableDataPageStatic extends Component<TProps> {
  componentDidMount() {
    this.props.getData();
  }

  public render() {
    const {data: {items: {data, groupLists}}} = this.props;

    return (
      <>
        <TableData
          data={data}
          groupLists={groupLists}
        />
      </>
    );
  }
}

export const DataPage =
  withRouter(connect(tableDataPageSelector.mapState, tableDataPageSelector.mapDispatch)(TableDataPageStatic));

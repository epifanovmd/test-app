import {LoadState} from "../../common/loadState";
import {IResponse} from "../../common/response";
import {IResultData} from "./dataPageActions";

export interface IListValues {
  date: string;
  plan: number;
  fact: number;
}

export interface IList {
  name: string;
  date: string;
}

export interface IGroupsList {
  listYears: IList[];
  listQuarters: IList[];
  listMonths: IList[];
  listDays: IList[];
}

export interface IData {
  name: string;
  listChild: IData[];
  listDayValues: IListValues[];
  listMonthValues: IListValues[];
  listQuarterValues: IListValues[];
  listYearValues: IListValues[];
}

export interface IDataPageState {
  data: IResponse<IResultData>;
}

export const dataInitialState: IDataPageState = {
  data: {
    items: {
      data: [],
      groupLists: {
        listDays: [],
        listMonths: [],
        listQuarters: [],
        listYears: [],
      },
    },
    loadState: LoadState.needLoad,
  },
};

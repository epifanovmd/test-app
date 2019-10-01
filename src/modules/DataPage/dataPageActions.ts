import {actionCreator} from "../../store/common/actionCreator";
import {IEmpty} from "../../common/IEmpty";
import {IData, IGroupsList} from "./dataPageState";

export interface IResultData {
  groupLists: IGroupsList;
  data: IData[];
}

export class DataPageActions {
  static getData = actionCreator.async<IEmpty, IResultData, Error>("DataPage/GET_DATA");
}

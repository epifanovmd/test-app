import {combineReducers, Reducer} from "redux";
import {IAppState} from "../IAppState";
import {dataPageReducer} from "../../modules/DataPage/dataPageReducer";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    dataPage: dataPageReducer,
  };

  return combineReducers(_reducers);

}

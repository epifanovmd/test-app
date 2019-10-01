import {reducerWithInitialState} from "typescript-fsa-reducers";
import {IDataPageState, dataInitialState} from "./dataPageState";
import {DataPageActions, IResultData} from "./dataPageActions";
import {newState} from "../../store/common/newState";
import {LoadState} from "../../common/loadState";
import {Success} from "typescript-fsa";
import {IEmpty} from "../../common/IEmpty";

function getDataStartedHandler(state: IDataPageState): IDataPageState {
  return newState(state, {
    data: {
      loadState: LoadState.refreshing,
      items: state.data.items,
    },
  });
}

function getDataDoneHandler(state: IDataPageState, {result}: Success<IEmpty, IResultData>): IDataPageState {
  return newState(state, newState(state, {
    data: {
      loadState: LoadState.idle,
      items: {
        groupLists: result.groupLists,
        data: result.data,
      },
    },
  }));
}

function getDataFailedHandler(state: IDataPageState): IDataPageState {
  return newState(state, newState(state, {
    data: {
      loadState: LoadState.error,
      items: state.data.items,
    },
  }));
}

export const dataPageReducer = reducerWithInitialState(dataInitialState)
  .case(DataPageActions.getData.started, getDataStartedHandler)
  .case(DataPageActions.getData.done, getDataDoneHandler)
  .case(DataPageActions.getData.failed, getDataFailedHandler)
  .build();

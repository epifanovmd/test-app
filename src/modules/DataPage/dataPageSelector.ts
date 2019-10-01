import {IAppState} from "../../store/IAppState";
import {DataPageThunk} from "./dataPageThunk";
import {SimpleDispatch} from "../../common/simpleThunk";
import {IResultData} from "./dataPageActions";

class DataPageSelector {
  mapState = ({dataPage}: IAppState) => (
    {
      data: dataPage.data,
    }
  );

  mapDispatch = (dispatch: SimpleDispatch) => (
    {
      getData: (callback?: (result: IResultData) => void): void => {
        return dispatch(DataPageThunk.getData(callback));
      },
    });
}

export const tableDataPageSelector = new DataPageSelector();

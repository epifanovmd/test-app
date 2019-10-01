import {SimpleThunk} from "../../common/simpleThunk";
import {DataPageActions, IResultData} from "./dataPageActions";
import {Dispatch} from "react";
import {Action} from "redux";
import {IData, IGroupsList, IList} from "./dataPageState";

const listYears: IList[] = [
  {
    name: "2019",
    date: "2019-01-01",
  },
];

const listQuarters: IList[] = [
  {
    name: "I кв. 2019",
    date: "2019-01-01",
  },
  {
    name: "II кв. 2019",
    date: "2019-05-01",
  },
];

const listMonths: IList[] = [
  {
    name: "Январь",
    date: "2019-01-01",
  },
  {
    name: "Май",
    date: "2019-05-01",
  },
];
const listDays: IList[] = [
  {
    name: "01",
    date: "2019-01-01",
  },
];

const data: IData[] = [
  {
    name: "Выручка",
    listChild: [
      {
        name: "Строительство",
        listChild: [
          {
            name: "Дом",
            listChild: [],
            listDayValues: [{
              fact: 110322305,
              plan: 110322305,
              date: "2019-01-01",
            }],
            listMonthValues: [{
              fact: 110322305,
              plan: 110322305,
              date: "2019-01-01",
            }],
            listQuarterValues: [{
              fact: 110322305,
              plan: 110322305,
              date: "2019-01-01",
            }],
            listYearValues: [{
              fact: 3,
              plan: 110322305,
              date: "2019-01-01",
            }],
          },
        ],
        listDayValues: [{
          fact: 110322305,
          plan: 110322305,
          date: "2019-01-01",
        }],
        listMonthValues: [{
          fact: 110322305,
          plan: 110322305,
          date: "2019-01-01",
        }],
        listQuarterValues: [{
          fact: 110322305,
          plan: 110322305,
          date: "2019-01-01",
        }],
        listYearValues: [{
          fact: 2,
          plan: 110322305,
          date: "2019-01-01",
        }],
      },
    ],
    listDayValues: [{
      fact: 507523501,
      plan: 507523501,
      date: "2019-01-01",
    }, {
      fact: 507523501,
      plan: 507523501,
      date: "2019-05-01",
    }],
    listMonthValues: [{
      fact: 507523501,
      plan: 507523501,
      date: "2019-01-01",
    }, {
      fact: 507523501,
      plan: 507523501,
      date: "2019-05-01",
    }],
    listQuarterValues: [{
      fact: 507523501,
      plan: 507523501,
      date: "2019-01-01",
    }, {
      fact: 507523501,
      plan: 507523501,
      date: "2019-05-01",
    }],
    listYearValues: [{
      fact: 1,
      plan: 507523501,
      date: "2019-01-01",
    }, {
      fact: 1,
      plan: 507523501,
      date: "2019-03-01",
    }],
  }, {
    name: "Себестоимость",
    listChild: [
      {
        name: "Гараж",
        listChild: [],
        listDayValues: [
          {
            fact: 564987194,
            plan: 564987194,
            date: "2019-01-01",
          }, {
            fact: 564987194,
            plan: 564987194,
            date: "2019-05-01",
          },
        ],
        listMonthValues: [
          {
            fact: 564987194,
            plan: 564987194,
            date: "2019-01-01",
          }, {
            fact: 564987194,
            plan: 564987194,
            date: "2019-05-01",
          },
        ],
        listQuarterValues: [
          {
            fact: 564987194,
            plan: 564987194,
            date: "2019-01-01",
          }, {
            fact: 564987194,
            plan: 564987194,
            date: "2019-05-01",
          },
        ],
        listYearValues: [
          {
            fact: 564987194,
            plan: 564987194,
            date: "2019-01-01",
          }, {
            fact: 564987194,
            plan: 564987194,
            date: "2019-05-01",
          },
        ],
      },
    ],
    listDayValues: [
      {
        fact: 564987194,
        plan: 564987194,
        date: "2019-01-01",
      }, {
        fact: 564987194,
        plan: 564987194,
        date: "2019-05-01",
      },
    ],
    listMonthValues: [
      {
        fact: 564987194,
        plan: 564987194,
        date: "2019-01-01",
      }, {
        fact: 564987194,
        plan: 564987194,
        date: "2019-05-01",
      },
    ],
    listQuarterValues: [
      {
        fact: 564987194,
        plan: 564987194,
        date: "2019-01-01",
      }, {
        fact: 564987194,
        plan: 564987194,
        date: "2019-05-01",
      },
    ],
    listYearValues: [
      {
        fact: 564987194,
        plan: 564987194,
        date: "2019-01-01",
      }, {
        fact: 564987194,
        plan: 564987194,
        date: "2019-05-01",
      },
    ],
  },
];

export class DataPageThunk {
  static getData(callback?: (data: IResultData) => void): SimpleThunk {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
      const params = {};
      dispatch(DataPageActions.getData.started(params));
      try {
        const groupLists: IGroupsList = {
          listYears,
          listQuarters,
          listMonths,
          listDays,
        };
        const result: IResultData = {
          groupLists,
          data,
        };
        callback && callback(result);

        return dispatch(DataPageActions.getData.done({params, result}));
      } catch (error) {
        return dispatch(DataPageActions.getData.failed({params, error}));
      }
    };
  }
}

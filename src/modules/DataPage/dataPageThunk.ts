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
    date: "2019-04-01",
  },
  {
    name: "III кв. 2019",
    date: "2019-07-01",
  },
  {
    name: "IV кв. 2019",
    date: "2019-10-01",
  },
];

const listMonths: IList[] = [
  {
    name: "Январь",
    date: "2019-01-01",
  },
  {
    name: "Февраль",
    date: "2019-02-01",
  },
  {
    name: "Март",
    date: "2019-03-01",
  },
  {
    name: "Апрель",
    date: "2019-04-01",
  },
  {
    name: "Май",
    date: "2019-05-01",
  },
  {
    name: "Июнь",
    date: "2019-06-01",
  },
  {
    name: "Июель",
    date: "2019-07-01",
  },
  {
    name: "Август",
    date: "2019-08-01",
  },
  {
    name: "Сентябрь",
    date: "2019-09-01",
  },
  {
    name: "Октябрь",
    date: "2019-10-01",
  },
  {
    name: "Ноябрь",
    date: "2019-11-01",
  },
  {
    name: "Декабрь",
    date: "2019-12-01",
  },
];
const listDays: IList[] = [];

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
            listDayValues: [],
            listMonthValues: [
              {
                fact: 123,
                plan: 123,
                date: "2019-01-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-02-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-03-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-04-01",
              },          {
                fact: 123,
                plan: 12,
                date: "2019-05-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-06-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-07-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-08-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-09-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-10-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-11-01",
              },          {
                fact: 123,
                plan: 123,
                date: "2019-12-01",
              },
            ],
            listQuarterValues: [
              {
                fact: 223,
                plan: 223,
                date: "2019-01-01",
              },
              {
                fact: 223,
                plan: 223,
                date: "2019-04-01",
              },
              {
                fact: 223,
                plan: 223,
                date: "2019-07-01",
              },
              {
                fact: 223,
                plan: 223,
                date: "2019-10-01",
              },
            ],
            listYearValues: [
              {
                fact: 323,
                plan: 323,
                date: "2019-01-01",
              },
            ],
          },
        ],
        listDayValues: [],
        listMonthValues: [
          {
            fact: 11,
            plan: 11,
            date: "2019-01-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-02-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-03-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-04-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-05-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-06-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-07-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-08-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-09-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-10-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-11-01",
          },          {
            fact: 11,
            plan: 11,
            date: "2019-12-01",
          },
        ],
        listQuarterValues: [
          {
            fact: 22,
            plan: 22,
            date: "2019-01-01",
          },
          {
            fact: 22,
            plan: 22,
            date: "2019-04-01",
          },
          {
            fact: 22,
            plan: 22,
            date: "2019-07-01",
          },
          {
            fact: 22,
            plan: 22,
            date: "2019-10-01",
          },
        ],
        listYearValues: [
          {
            fact: 33,
            plan: 33,
            date: "2019-01-01",
          },
        ],
      },
    ],
    listDayValues: [],
    listMonthValues: [
      {
        fact: 1,
        plan: 1,
        date: "2019-01-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-02-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-03-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-04-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-05-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-06-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-07-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-08-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-09-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-10-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-11-01",
      },          {
        fact: 1,
        plan: 1,
        date: "2019-12-01",
      },
    ],
    listQuarterValues: [
      {
        fact: 2,
        plan: 2,
        date: "2019-01-01",
      },
      {
        fact: 2,
        plan: 2,
        date: "2019-04-01",
      },
      {
        fact: 2,
        plan: 2,
        date: "2019-07-01",
      },
      {
        fact: 2,
        plan: 2,
        date: "2019-10-01",
      },
    ],
    listYearValues: [
      {
        fact: 3,
        plan: 3,
        date: "2019-01-01",
      },
    ],
  }, {
    name: "Себестоимость",
    listChild: [],
    listDayValues: [],
    listMonthValues: [
      {
        fact: 12,
        plan: 12,
        date: "2019-01-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-02-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-03-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-04-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-05-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-06-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-07-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-08-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-09-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-10-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-11-01",
      },          {
        fact: 12,
        plan: 12,
        date: "2019-12-01",
      },
    ],
    listQuarterValues: [
      {
        fact: 22,
        plan: 22,
        date: "2019-01-01",
      },
      {
        fact: 22,
        plan: 22,
        date: "2019-04-01",
      },
      {
        fact: 22,
        plan: 22,
        date: "2019-07-01",
      },
      {
        fact: 22,
        plan: 22,
        date: "2019-10-01",
      },
    ],
    listYearValues: [
      {
        fact: 32,
        plan: 32,
        date: "2019-01-01",
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

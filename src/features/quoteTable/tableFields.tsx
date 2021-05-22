import { IQuoteTicker } from './interfaces';

interface ITableField {
  title: string;
  field: keyof IQuoteTicker;
  compare(a: IQuoteTicker, b: IQuoteTicker): number;
}

function getCompareNumber(field: keyof IQuoteTicker): ITableField['compare'] {
  return (a: IQuoteTicker, b: IQuoteTicker) => {
    if (Number(a[field]) > Number(b[field])) {
      return 1;
    }
    if (Number(a[field]) < Number(b[field])) {
      return -1;
    }

    return 0;
  };
}

const quoteTableFields: ITableField[] = [
  {
    title: 'Ticker',
    field: 'symbol',
    compare: (a, b) => {
      if (a.symbol > b.symbol) {
        return 1;
      }
      if (a.symbol < b.symbol) {
        return -1;
      }

      return 0;
    },
  },
  {
    title: 'Bid',
    field: 'bid',
    compare: getCompareNumber('bid'),
  },
  {
    title: 'Ask',
    field: 'ask',
    compare: getCompareNumber('ask'),
  },
  {
    title: 'High',
    field: 'high',
    compare: getCompareNumber('high'),
  },
  {
    title: 'Low',
    field: 'low',
    compare: getCompareNumber('low'),
  },
  {
    title: 'Last',
    field: 'last',
    compare: getCompareNumber('last'),
  },
];

export default quoteTableFields;

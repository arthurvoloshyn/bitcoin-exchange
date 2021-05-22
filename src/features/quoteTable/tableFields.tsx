import { QuoteTicker } from './interfaces';

interface TableField {
  title: string;
  field: keyof QuoteTicker;
  compare(a: QuoteTicker, b: QuoteTicker): number;
}

function getCompareNumber(field: keyof QuoteTicker): TableField['compare'] {
  return (a: QuoteTicker, b: QuoteTicker) => {
    if (Number(a[field]) > Number(b[field])) {
      return 1;
    } else if (Number(a[field]) < Number(b[field])) {
      return -1;
    }

    return 0;
  };
}

const quoteTableFields: TableField[] = [
  {
    title: 'Ticker',
    field: 'symbol',
    compare: (a, b) => {
      if (a.symbol > b.symbol) {
        return 1;
      } else if (a.symbol < b.symbol) {
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

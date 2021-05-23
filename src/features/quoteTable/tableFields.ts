import { IQuoteTicker } from './interfaces';

interface ITableField {
  title: string;
  field: keyof IQuoteTicker;
  compare(a: IQuoteTicker, b: IQuoteTicker): number;
}

const getCompareNumber =
  (field: keyof IQuoteTicker): ITableField['compare'] =>
  (a: IQuoteTicker, b: IQuoteTicker) => {
    const fieldIsSymbol: boolean = field === 'symbol';

    const fieldA: string | number = fieldIsSymbol ? a[field] : +a[field];
    const fieldB: string | number = fieldIsSymbol ? b[field] : +b[field];

    if (fieldA > fieldB) return 1;
    if (fieldA < fieldB) return -1;

    return 0;
  };

const quoteTableFields: ITableField[] = [
  {
    title: 'Ticker',
    field: 'symbol',
    compare: getCompareNumber('symbol'),
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

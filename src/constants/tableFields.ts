import { IQuoteTicker, SortByField } from '../../types/interfaces';
import getSortByField from '../utils/getSortByField';

interface ITableField {
  title: string;
  field: keyof IQuoteTicker;
  compare: SortByField;
}

const quoteTableFields: ITableField[] = [
  {
    title: 'Ticker',
    field: 'symbol',
    compare: getSortByField('symbol'),
  },
  {
    title: 'Bid',
    field: 'bid',
    compare: getSortByField('bid'),
  },
  {
    title: 'Ask',
    field: 'ask',
    compare: getSortByField('ask'),
  },
  {
    title: 'High',
    field: 'high',
    compare: getSortByField('high'),
  },
  {
    title: 'Low',
    field: 'low',
    compare: getSortByField('low'),
  },
  {
    title: 'Last',
    field: 'last',
    compare: getSortByField('last'),
  },
];

export default quoteTableFields;

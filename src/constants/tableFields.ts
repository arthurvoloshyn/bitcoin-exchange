import getSortByField from '../utils/getSortByField';

import { ITableField } from '../types/constants';

const QUOTE_TABLE_FIELDS: ITableField[] = [
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

export default QUOTE_TABLE_FIELDS;

import React from 'react';

import { IQuoteTicker, SortByField } from './features';

export type ContainerRow = { id: string; component: React.FC };

export interface ITableField {
  title: string;
  field: keyof IQuoteTicker;
  compare: SortByField;
}

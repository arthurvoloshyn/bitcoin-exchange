import React from 'react';

import { IQuoteTicker, SortByField } from './features';

export type ContainerRow = { id: string; component: React.ReactElement };

export interface ITableField {
  title: string;
  field: keyof IQuoteTicker;
  compare: SortByField;
}

export type Environment = { IS_PROD: boolean; IS_DEV: boolean };

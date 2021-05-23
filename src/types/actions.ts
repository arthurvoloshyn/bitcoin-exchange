import { PrepareAction } from '@reduxjs/toolkit';

import { IQuoteTicker } from './features';

export type SetUpdateTickersPayload = Map<string, IQuoteTicker>;

export interface ICreateActionTickerPayload {
  (tickersMap: SetUpdateTickersPayload): ReturnType<PrepareAction<IQuoteTicker[]>>;
}

export type PrepareTickersMap = { payload: IQuoteTicker[] };

import { createAction } from '@reduxjs/toolkit';

import { IQuoteTicker, IQuoteTickerSymbol, ISortParams } from '../../../types/features';
import {
  ICreateActionTickerPayload,
  PrepareTickersMap,
  SetUpdateTickersPayload,
} from '../../../types/actions';

const prepareTickersMap = (tickersMap: SetUpdateTickersPayload): PrepareTickersMap => {
  const result: IQuoteTicker[] = [];

  tickersMap.forEach(ticker => result.push(ticker));

  return {
    payload: result,
  };
};

const tickersActions = {
  tickers: {
    set: createAction<ICreateActionTickerPayload>('tickers/set', prepareTickersMap),
    update: createAction<ICreateActionTickerPayload>('tickers/update', prepareTickersMap),
  },
  symbols: {
    set: createAction<IQuoteTickerSymbol[]>('tickers/symbols/set'),
  },
  toggleDarkTheme: createAction<void>('tickers/toggle/DarkTheme'),
  setSortType: createAction<ISortParams>('tickers/sortType/set'),
  toggleLimit: createAction<void>('tickers/toggle/limit50'),
};

export default tickersActions;

import REQUEST_IDS from '../constants/requestIds';

import { IQuoteTicker, IQuoteTickerSymbol } from './features';

export interface ITickerSubscribeResponse {
  id: REQUEST_IDS.SUBSCRIBE_TICKER;
  result: boolean;
}

export interface ITickerResponse {
  method: 'ticker';
  params: IQuoteTicker;
}

export type SocketData = ITickerResponse | ITickerSubscribeResponse;

export type Symbols = { result: IQuoteTickerSymbol[] };

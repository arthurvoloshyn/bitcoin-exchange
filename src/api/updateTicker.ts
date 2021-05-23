import tickersSlice from '../state/ducks/quoteTable/tickersSlice';

import { WebSocketApp } from '../types/utils';
import { AppDispatch } from '../types/store';
import { IQuoteTicker } from '../types/features';

const updateIntervalMs = 42;

const updateTicker = (ws: WebSocketApp, dispatch: AppDispatch): void => {
  const tickerCache = new Map<string, IQuoteTicker>();
  let controlPoint: number = Date.now();

  ws.addEventListener('message', ({ data }: MessageEvent) => {
    const ticker: IQuoteTicker = JSON.parse(data).params;

    tickerCache.set(ticker.symbol, ticker);

    if (Date.now() - controlPoint > updateIntervalMs) {
      dispatch(tickersSlice.actions.tickers.update(tickerCache));
      controlPoint = Date.now();
      tickerCache.clear();
    }
  });
};

export default updateTicker;

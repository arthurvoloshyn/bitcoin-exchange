import { quoteTableActions } from '../state/ducks/quoteTable';

import { WebSocketApp } from '../types/utils';
import { AppDispatch } from '../types/store';
import { IQuoteTicker } from '../types/features';

const updateIntervalMs = 50;

const updateTicker = (ws: WebSocketApp, dispatch: AppDispatch): void => {
  const tickerCache = new Map<string, IQuoteTicker>();
  let controlPoint: number = Date.now();

  ws.addEventListener('message', ({ data }: MessageEvent) => {
    const ticker: IQuoteTicker = JSON.parse(data).params;

    tickerCache.set(ticker.symbol, ticker);

    if (Date.now() - controlPoint > updateIntervalMs) {
      const { tickers } = quoteTableActions;

      dispatch(tickers.update(tickerCache));
      controlPoint = Date.now();
      tickerCache.clear();
    }
  });
};

export default updateTicker;

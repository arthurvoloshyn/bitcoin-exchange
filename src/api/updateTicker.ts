import { WebSocketApp } from '../../../utils/types';
import { AppDispatch } from '../state/store';
import { IQuoteTicker } from '../../../types/interfaces';
import tickersSlice from '../state/ducks/quoteTable/tickersSlice';

const updateInterval = 42; // in ms

export default function updateTicker(ws: WebSocketApp, dispatch: AppDispatch): void {
  const tickerCache = new Map();
  let controlPoint = Date.now();

  ws.addEventListener('message', ({ data }) => {
    const ticker = JSON.parse(data).params as IQuoteTicker;

    tickerCache.set(ticker.symbol, ticker);

    if (Date.now() - controlPoint > updateInterval) {
      dispatch(tickersSlice.actions.tickers.update(tickerCache));
      controlPoint = Date.now();
      tickerCache.clear();
    }
  });
}

import { WebSocketApp } from '../../../utils';
import { AppDispatch } from '../../../app/store';
import { IQuoteTicker } from '../interfaces';
import tickersSlice from '../store/tickersSlice';

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

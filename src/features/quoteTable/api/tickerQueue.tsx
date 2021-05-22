import { WebSocketApp } from '../../../utils';
import { AppDispatch } from '../../../app/store';
import getSymbols from './getSymbols';
import getInitialTickers from './getInitialTickers';
import updateTicker from './updateTicker';
import socketConnect from './socketConnect';
import tickersSlice from '../store/tickersSlice';

export default async function tickerQueue(
  ws: WebSocketApp,
  dispatch: AppDispatch,
): Promise<void> {
  await socketConnect(ws);

  const symbols = await getSymbols(ws);

  dispatch(tickersSlice.actions.symbols.set(symbols));

  const initialTickers = await getInitialTickers(ws, symbols);

  dispatch(tickersSlice.actions.tickers.set(initialTickers));

  updateTicker(ws, dispatch);
}

import { quoteTableActions } from '../state/ducks/quoteTable';

import { WebSocketApp } from '../types/utils';
import { AppDispatch } from '../types/store';
import getSymbols from './getSymbols';
import getInitialTickers from './getInitialTickers';
import updateTicker from './updateTicker';
import socketConnect from './socketConnect';

import { IQuoteTicker, IQuoteTickerSymbol } from '../types/features';

const tickerQueue = async (ws: WebSocketApp, dispatch: AppDispatch): Promise<void> => {
  await socketConnect(ws);

  const symbols: IQuoteTickerSymbol[] = await getSymbols(ws);

  const { symbols: symbolsAction, tickers: tickersAction } = quoteTableActions;

  dispatch(symbolsAction.set(symbols));

  const initialTickers: Map<string, IQuoteTicker> = await getInitialTickers(ws, symbols);

  dispatch(tickersAction.set(initialTickers));

  updateTicker(ws, dispatch);
};

export default tickerQueue;

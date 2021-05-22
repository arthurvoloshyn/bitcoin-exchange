import tickerQueue from '../tickerQueue';
import { WebSocketApp, getWebsocketMock } from '../../../../utils';
import getSymbols from '../getSymbols';
import getInitialTickers from '../getInitialTickers';
import updateTicker from '../updateTicker';
import socketConnect from '../socketConnect';
import {
  getMockQuoteTickerSymbol,
  getMockQuoteTicker,
} from 'features/quoteTable/utils';
import tickersSlice from '../../store/tickersSlice';

jest.mock('../getSymbols');
jest.mock('../getInitialTickers');
jest.mock('../updateTicker');
jest.mock('../socketConnect');

describe('Test ticker queue', () => {
  it('Default use', async () => {
    const ws = getWebsocketMock();
    const dispatch = jest.fn();
    const testSymbols = [getMockQuoteTickerSymbol()];
    const testTicker = getMockQuoteTicker();
    const testInitMapTicker = new Map();
    testInitMapTicker.set(testTicker.symbol, testTicker);

    (
      getSymbols as jest.MockedFunction<typeof getSymbols>
    ).mockResolvedValueOnce(testSymbols);
    (
      getInitialTickers as jest.MockedFunction<typeof getInitialTickers>
    ).mockResolvedValueOnce(testInitMapTicker);

    await tickerQueue(ws, dispatch);

    expect(socketConnect).toHaveBeenCalled();
    expect(getSymbols).toHaveBeenCalled();
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      tickersSlice.actions.symbols.set(testSymbols),
    );
    expect(getInitialTickers).toHaveBeenCalled();
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      tickersSlice.actions.tickers.set(testInitMapTicker),
    );
    expect(updateTicker).toHaveBeenCalled();
  });
});

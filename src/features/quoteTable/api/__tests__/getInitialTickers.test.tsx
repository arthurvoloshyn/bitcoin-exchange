import { getMockQuoteTicker, getMockQuoteTickerSymbol } from '../../utils';
import { IQuoteTicker } from '../../interfaces';
import getInitialTickers from '../getInitialTickers';
import { getWebsocketMock } from '../../../../utils';
import { REQUEST_IDS } from '../interfaces';

describe('Test get initial tickers', () => {
  const testTickers = [getMockQuoteTicker(), getMockQuoteTicker()];
  const testSymbols = [getMockQuoteTickerSymbol(), getMockQuoteTickerSymbol()];

  it('Default use', async () => {
    const ws = getWebsocketMock();

    ws.addEventListener.mockImplementation((event, handler) => {
      const mockEvents = [
        {
          data: JSON.stringify({
            id: REQUEST_IDS.subscribeTicker,
            result: true,
          }),
        },
        {
          data: JSON.stringify({
            method: 'ticker',
            params: { ...testTickers[0] },
          }),
        },
        {
          data: JSON.stringify({
            method: 'ticker',
            params: { ...testTickers[1] },
          }),
        },
      ] as MessageEvent[];

      if (typeof handler === 'function') {
        mockEvents.forEach(e => handler(e));
      }
    });

    const tickers = await getInitialTickers(ws, testSymbols);

    expect(ws.send).toHaveBeenCalledTimes(2);
    expect(ws.removeEventListener).toHaveBeenCalledWith(
      'message',
      expect.any(Function),
    );

    const testMapTickers = new Map<string, IQuoteTicker>();

    testTickers.forEach(ticker => testMapTickers.set(ticker.symbol, ticker));

    expect(tickers).toEqual(testMapTickers);
  });
});

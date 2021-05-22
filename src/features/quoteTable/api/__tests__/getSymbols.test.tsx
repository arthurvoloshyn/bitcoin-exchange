import { getMockQuoteTickerSymbol } from 'features/quoteTable/utils';
import { getWebsocketMock, IMockWebsocket } from '../../../../utils';
import getSymbols from '../getSymbols';
import { REQUEST_IDS } from '../interfaces';

describe('Test get symbols api', () => {
  let ws: IMockWebsocket;

  beforeEach(() => {
    ws = getWebsocketMock();
  });

  it('Default use', async () => {
    const testSymbol = getMockQuoteTickerSymbol();

    ws.addEventListener.mockImplementation((event, handler) => {
      if (typeof handler === 'function') {
        const mockEvent = {
          data: JSON.stringify({
            id: REQUEST_IDS.getSymbols,
            result: [testSymbol],
          }),
        } as MessageEvent;
        handler(mockEvent);
      }
    });

    const symbols = await getSymbols(ws);

    expect(symbols).toEqual([testSymbol]);
    expect(ws.send).toHaveBeenCalled();
  });
});

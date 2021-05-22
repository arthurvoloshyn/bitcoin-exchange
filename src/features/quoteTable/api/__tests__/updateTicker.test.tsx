import { getMockQuoteTicker } from 'features/quoteTable/utils';
import { getWebsocketMock } from '../../../../utils';
import { QuoteTicker } from '../../interfaces';
import updateTicker from '../updateTicker';

describe('Test update ticker', () => {
  it('Default use', () => {
    const ws = getWebsocketMock();
    const dispatch = jest.fn();
    const testTicker = getMockQuoteTicker();
    const testTickerMap = new Map<string, QuoteTicker>();

    testTickerMap.set(testTicker.symbol, testTicker);

    updateTicker(ws, dispatch);

    expect(ws.addEventListener).toHaveBeenCalledWith(
      'message',
      expect.any(Function),
    );
  });
});

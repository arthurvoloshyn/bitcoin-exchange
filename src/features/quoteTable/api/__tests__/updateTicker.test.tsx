import { getMockQuoteTicker } from '../../utils';
import { getWebsocketMock } from '../../../../utils';
import { IQuoteTicker } from '../../interfaces';
import updateTicker from '../updateTicker';

describe('Test update ticker', () => {
  it('Default use', () => {
    const ws = getWebsocketMock();
    const dispatch = jest.fn();
    const testTicker = getMockQuoteTicker();
    const testTickerMap = new Map<string, IQuoteTicker>();

    testTickerMap.set(testTicker.symbol, testTicker);

    updateTicker(ws, dispatch);

    expect(ws.addEventListener).toHaveBeenCalledWith('message', expect.any(Function));
  });
});

import { WebSocketApp, getWebsocketMock } from '../index';

describe('Test websocket mock', () => {
  it('Default use', () => {
    const wsMock = getWebsocketMock();
    const testFn = (ws: WebSocketApp) => {
      ws.addEventListener('message', () => {});
      ws.send('test');
      ws.close();
      ws.removeEventListener('message', () => {});
    };

    testFn(wsMock);

    expect(wsMock.addEventListener).toHaveBeenCalled();
    expect(wsMock.send).toHaveBeenCalledWith('test');
    expect(wsMock.close).toHaveBeenCalled();
    expect(wsMock.removeEventListener).toHaveBeenCalled();
  });
});

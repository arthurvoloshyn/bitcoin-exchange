type WebSocketAppKeys = 'addEventListener' | 'send' | 'close' | 'removeEventListener';

export type WebSocketApp = Pick<WebSocket, WebSocketAppKeys>;

export interface IMockWebsocket {
  close: jest.MockedFunction<WebSocket['close']>;
  send: jest.MockedFunction<WebSocket['send']>;
  addEventListener: jest.MockedFunction<WebSocket['addEventListener']>;
  removeEventListener: jest.MockedFunction<WebSocket['removeEventListener']>;
}

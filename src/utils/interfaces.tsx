export type WebSocketApp = Pick<
  WebSocket,
  'addEventListener' | 'send' | 'close' | 'removeEventListener'
>;
export interface MockWebsocket {
  close: jest.MockedFunction<WebSocket['close']>;
  send: jest.MockedFunction<WebSocket['send']>;
  addEventListener: jest.MockedFunction<WebSocket['addEventListener']>;
  removeEventListener: jest.MockedFunction<WebSocket['removeEventListener']>;
}

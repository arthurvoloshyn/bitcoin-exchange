import { MockWebsocket } from './interfaces';

export default function getWebsocketMock() {
  return {
    close: jest.fn(),
    send: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  } as MockWebsocket;
}

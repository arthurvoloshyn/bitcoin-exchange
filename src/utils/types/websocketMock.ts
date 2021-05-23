import { IMockWebsocket } from './interfaces';

const getWebsocketMock = (): IMockWebsocket => ({
  close: jest.fn(),
  send: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
});

export default getWebsocketMock;

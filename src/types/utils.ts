import React from 'react';
import { MockStore } from 'redux-mock-store';

type WebSocketAppKeys = 'addEventListener' | 'send' | 'close' | 'removeEventListener';

export type WebSocketApp = Pick<WebSocket, WebSocketAppKeys>;

export type ExtClasses = { extClasses: string; value: string };

export interface ITestProvider {
  TestProvider: React.FC;
  store: MockStore;
}

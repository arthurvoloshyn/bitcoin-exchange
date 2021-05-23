type WebSocketAppKeys = 'addEventListener' | 'send' | 'close' | 'removeEventListener';

export type WebSocketApp = Pick<WebSocket, WebSocketAppKeys>;

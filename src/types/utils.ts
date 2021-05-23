type WebSocketAppKeys = 'addEventListener' | 'send' | 'close' | 'removeEventListener';

export type WebSocketApp = Pick<WebSocket, WebSocketAppKeys>;

export type ExtClasses = { extClasses: string; value: string };

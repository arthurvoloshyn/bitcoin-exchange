import { WebSocketApp } from '../../../utils';

export function tickersWs(): WebSocketApp {
  return new WebSocket('wss://api.exchange.bitcoin.com/api/2/ws');
}

export default function socketConnect(ws: WebSocketApp): Promise<WebSocketApp> {
  return new Promise<WebSocketApp>(resolve => {
    ws.addEventListener('open', () => {
      resolve();
    });
  });
}

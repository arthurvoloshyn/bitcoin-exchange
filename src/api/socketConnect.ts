import PATHS from '../constants/paths';

import { WebSocketApp } from '../types/utils';

export const tickersWs = (): WebSocketApp => new WebSocket(`${PATHS.BASE_PATH}${PATHS.WS_PATH}`);

const socketConnect = (ws: WebSocketApp): Promise<WebSocketApp> => {
  return new Promise<WebSocketApp>(resolve => {
    ws.addEventListener('open', () => resolve());
  });
};

export default socketConnect;

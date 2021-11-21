import PATHS from '../constants/paths';
import ERROR_TEXTS from '../constants/errorTexts';
import { quoteTableActions } from '../state/ducks/quoteTable';

import { WebSocketApp } from '../types/utils';
import { AppDispatch } from '../types/store';

export const tickersWs = (): WebSocketApp => new WebSocket(`${PATHS.BASE_PATH}${PATHS.WS_PATH}`);

const socketConnect = (ws: WebSocketApp, dispatch: AppDispatch): Promise<WebSocketApp | void> => {
  const { setError } = quoteTableActions;
  return new Promise<WebSocketApp | void>(resolve => {
    ws.addEventListener('open', () => resolve());
    ws.addEventListener('error', () => dispatch(setError(ERROR_TEXTS.UNABLE_TO_CONNECT)));
  });
};

export default socketConnect;

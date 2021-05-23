import REQUEST_IDS from '../constants/requestIds';

import { IQuoteTickerSymbol } from '../types/features';
import { WebSocketApp } from '../types/utils';

const getSymbols = (ws: WebSocketApp): Promise<IQuoteTickerSymbol[]> => {
  return new Promise<IQuoteTickerSymbol[]>(resolve => {
    const msgSymbolsHandler = ({ data }: MessageEvent): void => {
      const msg = JSON.parse(data);

      ws.removeEventListener('message', msgSymbolsHandler);
      resolve(msg.result);
    };

    ws.addEventListener('message', msgSymbolsHandler);
    ws.send(
      JSON.stringify({
        id: REQUEST_IDS.GET_SYMBOLS,
        method: REQUEST_IDS.GET_SYMBOLS,
      }),
    );
  });
};

export default getSymbols;

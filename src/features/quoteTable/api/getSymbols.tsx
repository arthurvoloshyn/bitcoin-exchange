import { IQuoteTickerSymbol } from '../interfaces';
import { WebSocketApp } from '../../../utils';
import { REQUEST_IDS } from './interfaces';

export default function getSymbols(
  ws: WebSocketApp,
): Promise<IQuoteTickerSymbol[]> {
  return new Promise<IQuoteTickerSymbol[]>(resolve => {
    const msgSymbolsHandler = ({ data }: MessageEvent): void => {
      const msg = JSON.parse(data);

      ws.removeEventListener('message', msgSymbolsHandler);
      resolve(msg.result);
    };

    ws.addEventListener('message', msgSymbolsHandler);
    ws.send(
      JSON.stringify({
        id: REQUEST_IDS.getSymbols,
        method: REQUEST_IDS.getSymbols,
      }),
    );
  });
}

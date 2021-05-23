import REQUEST_IDS from '../constants/requestIds';

import { WebSocketApp } from '../types/utils';
import { IQuoteTickerSymbol, IQuoteTicker } from '../types/features';
import { SocketData } from '../types/api';

const getInitialTickers = (
  ws: WebSocketApp,
  totalTickers: IQuoteTickerSymbol[],
): Promise<Map<string, IQuoteTicker>> => {
  return new Promise(resolve => {
    const tickerCache = new Map<string, IQuoteTicker>();
    const handleInitTickers = ({ data }: MessageEvent): void => {
      const msg: SocketData = JSON.parse(data);

      if ('method' in msg && msg.method === 'ticker') {
        const ticker: IQuoteTicker = msg.params;

        tickerCache.set(ticker.symbol, ticker);

        if (tickerCache.size === totalTickers.length) {
          resolve(tickerCache);
          ws.removeEventListener('message', handleInitTickers);
        }
      }
    };

    ws.addEventListener('message', handleInitTickers);

    totalTickers.forEach((symbolData: IQuoteTickerSymbol) =>
      ws.send(
        JSON.stringify({
          id: REQUEST_IDS.SUBSCRIBE_TICKER,
          method: REQUEST_IDS.SUBSCRIBE_TICKER,
          params: {
            symbol: symbolData.id,
          },
        }),
      ),
    );
  });
};

export default getInitialTickers;

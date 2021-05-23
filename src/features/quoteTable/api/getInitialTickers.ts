import { WebSocketApp } from '../../../utils/types';
import { IQuoteTickerSymbol, IQuoteTicker } from '../../../types/interfaces';
import { REQUEST_IDS } from './types/interfaces';

interface ITickerSubscribeResponse {
  id: REQUEST_IDS.subscribeTicker;
  result: boolean;
}

interface ITickerResponse {
  method: 'ticker';
  params: IQuoteTicker;
}

type SocketData = ITickerResponse | ITickerSubscribeResponse;

function tickerGuard(msg: ITickerResponse): boolean {
  return msg.method === 'ticker';
}

export default function getInitialTickers(
  ws: WebSocketApp,
  totalTickers: IQuoteTickerSymbol[],
): Promise<Map<string, IQuoteTicker>> {
  return new Promise(resolve => {
    const tickerCache = new Map<string, IQuoteTicker>();
    const handleInitTickers = ({ data }: MessageEvent): void => {
      const msg = JSON.parse(data) as SocketData;

      if (tickerGuard(msg)) {
        const ticker = msg.params;

        tickerCache.set(ticker.symbol, ticker);

        if (tickerCache.size === totalTickers.length) {
          resolve(tickerCache);
          ws.removeEventListener('message', handleInitTickers);
        }
      }
    };

    ws.addEventListener('message', handleInitTickers);

    totalTickers.forEach(symbolData =>
      ws.send(
        JSON.stringify({
          id: REQUEST_IDS.subscribeTicker,
          method: REQUEST_IDS.subscribeTicker,
          params: {
            symbol: symbolData.id,
          },
        }),
      ),
    );
  });
}

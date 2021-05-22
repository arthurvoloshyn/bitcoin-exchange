import { WebSocketApp } from '../../../utils';
import { QuoteTickerSymbol, QuoteTicker } from '../interfaces';
import { REQUEST_IDS } from './interfaces';

interface TickerSubscribeResponse {
  id: REQUEST_IDS.subscribeTicker;
  result: boolean;
}

interface TickerResponse {
  method: 'ticker';
  params: QuoteTicker;
}

type SocketData = TickerResponse | TickerSubscribeResponse;

function tickerGuard(msg: any): msg is TickerResponse {
  return msg.method === 'ticker';
}

export default function getInitialTickers(
  ws: WebSocketApp,
  totalTickers: QuoteTickerSymbol[],
): Promise<Map<string, QuoteTicker>> {
  return new Promise(resolve => {
    const tickerCache = new Map<string, QuoteTicker>();
    const handleInitTickers = ({ data }: MessageEvent) => {
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

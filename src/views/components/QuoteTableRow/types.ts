import { IQuoteTicker, IQuoteTickerSymbol, PreviousTicker } from '../../../types/features';

export interface IQuoteTableRowProps {
  ticker: IQuoteTicker;
  previousTicker: PreviousTicker;
  symbol: IQuoteTickerSymbol;
}

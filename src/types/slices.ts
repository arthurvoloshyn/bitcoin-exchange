import { ErrorMessage, IQuoteTicker, IQuoteTickerSymbol, ISortParams } from './features';

export interface ITickersState {
  data: IQuoteTicker[];
  previousData: {
    [id: string]: IQuoteTicker;
  };
  symbols: {
    [id: string]: IQuoteTickerSymbol;
  };
  onLimit50: boolean;
  sortType: ISortParams;
  isDarkTheme: boolean;
  error: ErrorMessage;
}

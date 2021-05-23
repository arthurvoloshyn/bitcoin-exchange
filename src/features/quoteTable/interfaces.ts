export interface IQuoteTicker {
  symbol: string;
  bid: string;
  ask: string;
  high: string;
  low: string;
  last: string;
}

export type QuoteTickerFields = keyof IQuoteTicker;

export interface IQuoteTickerSymbol {
  id: string;
  baseCurrency: string;
  feeCurrency: string;
}

export interface IQuoteTickerSymbolMap {
  [id: string]: IQuoteTickerSymbol;
}

export interface IQuoteTickerMap {
  [tickerSymbol: string]: IQuoteTicker;
}

export interface ISortParams {
  field: QuoteTickerFields;
  type: SortType;
}

export type SortType = 'up' | 'down';

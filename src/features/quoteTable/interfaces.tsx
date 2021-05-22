export interface QuoteTicker {
  symbol: string;
  bid: string;
  ask: string;
  high: string;
  low: string;
  last: string;
}

export type QuoteTickerFields = keyof QuoteTicker;

export interface QuoteTickerSymbol {
  id: string;
  baseCurrency: string;
  feeCurrency: string;
}

export interface QuoteTickerSymbolMap {
  [id: string]: QuoteTickerSymbol;
}

export interface QuoteTickerMap {
  [tickerSymbol: string]: QuoteTicker;
}

export interface SortParams {
  field: QuoteTickerFields;
  type: SortType;
}

export type SortType = 'up' | 'down';

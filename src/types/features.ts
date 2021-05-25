import CELL_VALUE from '../constants/cellValue';

export interface IQuoteTicker {
  symbol: string;
  bid: string;
  ask: string;
  high: string;
  low: string;
  last: string;
}

export type QuoteTickerFields = keyof IQuoteTicker;

export type PreviousTicker = null | IQuoteTicker;

export interface IQuoteTickerSymbol {
  id: string;
  baseCurrency: string;
  feeCurrency: string;
}

export interface IQuoteTickerSymbolMap {
  [id: string]: IQuoteTickerSymbol;
}

export interface ISortParams {
  field: QuoteTickerFields;
  type: SortType;
}

export type SortType = 'up' | 'down';

export type SortByField = (
  tickerA: IQuoteTicker,
  tickerB: IQuoteTicker,
) => CELL_VALUE.UP | CELL_VALUE.DOWN | CELL_VALUE.MIDDLE;

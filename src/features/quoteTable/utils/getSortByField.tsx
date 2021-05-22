import { QuoteTickerFields, SortType, IQuoteTicker } from '../interfaces';

type SortField = (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => 1 | -1 | 0;

const getSortByField = (field: QuoteTickerFields, sortType: SortType): SortField => {
  return (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => {
    const fieldIsSymbol: boolean = field === 'symbol';

    const a: string | number = fieldIsSymbol ? tickerA[field] : +tickerA[field];
    const b: string | number = fieldIsSymbol ? tickerB[field] : +tickerB[field];

    if (a > b) return sortType === 'up' ? 1 : -1;
    if (a < b) return sortType === 'up' ? -1 : 1;

    return 0;
  };
};

export default getSortByField;

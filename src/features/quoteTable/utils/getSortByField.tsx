import { QuoteTickerFields, SortType, QuoteTicker } from '../interfaces';

export default function getSortByField(
  field: QuoteTickerFields,
  sortType: SortType,
) {
  if (field === 'symbol') {
    return (tickerA: QuoteTicker, tickerB: QuoteTicker) => {
      const a = tickerA[field];
      const b = tickerB[field];

      if (a > b) {
        return sortType === 'up' ? 1 : -1;
      }
      if (a < b) {
        return sortType === 'up' ? -1 : 1;
      }

      return 0;
    };
  }

  return (tickerA: QuoteTicker, tickerB: QuoteTicker) => {
    const a = Number(tickerA[field]);
    const b = Number(tickerB[field]);

    if (a > b) {
      return sortType === 'up' ? 1 : -1;
    }
    if (a < b) {
      return sortType === 'up' ? -1 : 1;
    }

    return 0;
  };
}

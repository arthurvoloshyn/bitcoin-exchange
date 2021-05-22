import { QuoteTickerFields, SortType, IQuoteTicker } from '../interfaces';

const getSortByField = (field: QuoteTickerFields, sortType: SortType) => {
  if (field === 'symbol') {
    return (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => {
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

  return (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => {
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
};

export default getSortByField;

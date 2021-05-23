import { QuoteTickerFields, SortType, IQuoteTicker, SortByField } from '../../../types/interfaces';

const getSortByField = (field: QuoteTickerFields, sortType?: SortType): SortByField => {
  return (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => {
    const fieldIsSymbol: boolean = field === 'symbol';

    const fieldA: string | number = fieldIsSymbol ? tickerA[field] : +tickerA[field];
    const fieldB: string | number = fieldIsSymbol ? tickerB[field] : +tickerB[field];

    const upSortType: boolean = !sortType || sortType === 'up';

    if (fieldA > fieldB) return upSortType ? 1 : -1;
    if (fieldA < fieldB) return upSortType ? -1 : 1;

    return 0;
  };
};

export default getSortByField;

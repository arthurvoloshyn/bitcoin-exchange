import SORT_DIRECTIONS from '../constants/sortDirections';

import { IQuoteTicker, QuoteTickerFields, SortByField, SortType } from '../types/features';

const getSortByField = (field: QuoteTickerFields, sortType?: SortType): SortByField => {
  return (tickerA: IQuoteTicker, tickerB: IQuoteTicker) => {
    const fieldIsSymbol: boolean = field === 'symbol';

    const fieldA: string | number = fieldIsSymbol ? tickerA[field] : +tickerA[field];
    const fieldB: string | number = fieldIsSymbol ? tickerB[field] : +tickerB[field];

    const upSortType: boolean = !sortType || sortType === SORT_DIRECTIONS.UP;

    if (fieldA > fieldB) return upSortType ? 1 : -1;
    if (fieldA < fieldB) return upSortType ? -1 : 1;

    return 0;
  };
};

export default getSortByField;

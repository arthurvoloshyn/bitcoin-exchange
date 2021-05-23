import QUOTE_TABLE_CLASSES from '../constants/quoteTableClasses';

import { ITableField } from '../types/constants';
import { ExtClasses } from '../types/utils';
import { IQuoteTicker, IQuoteTickerSymbol, PreviousTicker } from '../types/features';

const getExtClasses = (
  ticker: IQuoteTicker,
  symbol: IQuoteTickerSymbol,
  previousTicker: PreviousTicker,
  tableField: ITableField,
): ExtClasses => {
  let extClasses = '';
  let value: string = ticker[tableField.field];

  if (tableField.field === 'symbol') value = `${symbol.baseCurrency} / ${symbol.feeCurrency}`;

  const CELL_VALUE_DOWN = -1;
  const CELL_VALUE_UP = 1;

  if (previousTicker !== null) {
    switch (tableField.compare(ticker, previousTicker)) {
      case CELL_VALUE_DOWN:
        extClasses = QUOTE_TABLE_CLASSES.CELL_VALUE_DOWN;
        break;
      case CELL_VALUE_UP:
        extClasses = QUOTE_TABLE_CLASSES.CELL_VALUE_UP;
        break;
      default:
        break;
    }
  }

  return { extClasses, value };
};

export default getExtClasses;

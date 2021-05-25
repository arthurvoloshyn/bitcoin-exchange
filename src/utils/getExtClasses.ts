import QUOTE_TABLE_CLASSES from '../constants/quoteTableClasses';
import CELL_VALUE from '../constants/cellValue';

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

  if (previousTicker !== null) {
    switch (tableField.compare(ticker, previousTicker)) {
      case CELL_VALUE.DOWN:
        extClasses = QUOTE_TABLE_CLASSES.CELL_VALUE_DOWN;
        break;
      case CELL_VALUE.UP:
        extClasses = QUOTE_TABLE_CLASSES.CELL_VALUE_UP;
        break;
      default:
        break;
    }
  }

  return { extClasses, value };
};

export default getExtClasses;

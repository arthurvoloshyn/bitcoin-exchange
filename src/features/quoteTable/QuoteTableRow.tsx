import React, { memo } from 'react';
import quoteTableFields from './tableFields';
import { IQuoteTicker, IQuoteTickerSymbol } from './interfaces';
import quoteTableClasses from './quoteTableClasse';

interface IQuoteTableRowProps {
  ticker: IQuoteTicker;
  previousTicker: null | IQuoteTicker;
  symbol: IQuoteTickerSymbol;
}

const QuoteTableRow = memo(
  ({ ticker, previousTicker, symbol }: IQuoteTableRowProps) => {
    return (
      <tr key={ticker.symbol}>
        {quoteTableFields.map(tableField => {
          let extClasses = '';
          let value = ticker[tableField.field];

          if (tableField.field === 'symbol') {
            value = `${symbol.baseCurrency} / ${symbol.feeCurrency}`;
          } else if (previousTicker !== null) {
            switch (tableField.compare(ticker, previousTicker)) {
              case -1:
                extClasses = quoteTableClasses.cellValueDawn;
                break;
              case 1:
                extClasses = quoteTableClasses.cellValueUp;
                break;
              default:
                break;
            }
          }

          return (
            <td key={tableField.field} className={extClasses}>
              {value}
            </td>
          );
        })}
      </tr>
    );
  },
);

export default QuoteTableRow;

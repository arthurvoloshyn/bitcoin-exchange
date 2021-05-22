import React, { memo } from 'react';
import quoteTableFields from './tableFields';
import { QuoteTicker, QuoteTickerSymbol } from './interfaces';
import quoteTableClasses from './quoteTableClasse';

interface QuoteTableRowProps {
  ticker: QuoteTicker;
  previousTicker: null | QuoteTicker;
  symbol: QuoteTickerSymbol;
}

const QuoteTableRow = memo(
  ({ ticker, previousTicker, symbol }: QuoteTableRowProps) => {
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

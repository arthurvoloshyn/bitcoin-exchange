import React from 'react';

import QUOTE_TABLE_CLASSES from '../../../constants/quoteTableClasses';
import QuoteTableRow from '../QuoteTableRow/QuoteTableRow';
import QuoteTableHead from '../QuoteTableHead/QuoteTableHead';

import { IQuoteTableViewProps } from './types';

import styles from '../../../styles/styles.module.scss';

const QuoteTableView: React.FC<IQuoteTableViewProps> = ({
  data,
  previousData,
  themeDark,
  symbolsMap,
  sortParams,
  dispatch,
}) => {
  const tableClasses = themeDark ? QUOTE_TABLE_CLASSES.DARK.TABLE : '';

  return (
    <table className={`table table-striped ${styles.quoteTable} ${tableClasses}`}>
      <QuoteTableHead dispatch={dispatch} sortParams={sortParams} />
      <tbody>
        {data.map(ticker => {
          const previousTicker = previousData[ticker.symbol] || null;
          const symbol = symbolsMap[ticker.symbol];

          return (
            <QuoteTableRow
              key={ticker.symbol}
              previousTicker={previousTicker}
              symbol={symbol}
              ticker={ticker}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default QuoteTableView;

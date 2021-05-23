import React from 'react';
import classNames from 'classNames'; // eslint-disable-line import/no-unresolved

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
  const tableClasses = classNames('table table-striped', styles.quoteTable, {
    [QUOTE_TABLE_CLASSES.DARK.TABLE]: themeDark,
  });

  return (
    <table className={tableClasses}>
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

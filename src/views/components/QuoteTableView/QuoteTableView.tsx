import React from 'react';
import { IQuoteTicker, IQuoteTickerSymbol, ISortParams } from '../../../types/features';
import QuoteTableRow from '../QuoteTableRow/QuoteTableRow';
import QUOTE_TABLE_CLASSES from '../../../constants/quoteTableClasses';
import QuoteTableHead from '../QuoteTableHead/QuoteTableHead';
import { AppDispatch } from '../../../state/store';
import styles from '../../../styles/styles.module.scss';

export interface IQuoteTableViewProps {
  data: IQuoteTicker[];
  previousData: {
    [symbolId: string]: IQuoteTicker;
  };
  themeDark?: boolean;
  symbolsMap: {
    [id: string]: IQuoteTickerSymbol;
  };
  sortParams: ISortParams;
  dispatch: AppDispatch;
}

const QuoteTableView: React.FC<IQuoteTableViewProps> = ({
  data,
  previousData,
  themeDark,
  symbolsMap,
  sortParams,
  dispatch,
}) => {
  return (
    <table
      className={`table table-striped ${styles.quoteTable} ${
        themeDark ? QUOTE_TABLE_CLASSES.DARK.TABLE : ''
      }`}
    >
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

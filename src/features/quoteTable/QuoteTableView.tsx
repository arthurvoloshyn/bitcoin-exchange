import React from 'react';
import { QuoteTicker, QuoteTickerSymbol, SortParams } from './interfaces';
import QuoteTableRow from './QuoteTableRow';
import quoteTableClasses from './quoteTableClasse';
import QuoteTableHead from './QuoteTableHead';
import { AppDispatch } from '../../app/store';
import styles from './styles.module.scss';

export interface QuoteTableViewProps {
  data: QuoteTicker[];
  previousData: {
    [symbolId: string]: QuoteTicker;
  };
  themeDark?: boolean;
  symbolsMap: {
    [id: string]: QuoteTickerSymbol;
  };
  sortParams: SortParams;
  dispatch: AppDispatch;
}

export default function QuoteTableView({
  data,
  previousData,
  themeDark,
  symbolsMap,
  sortParams,
  dispatch,
}: QuoteTableViewProps) {
  return (
    <table
      className={`table table-striped ${styles.quoteTable} ${
        themeDark ? quoteTableClasses.dark.table : ''
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
}

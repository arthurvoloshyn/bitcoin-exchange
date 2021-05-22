import React from 'react';
import { render, screen } from '@testing-library/react';
import { byRole, byText } from 'testing-library-selector';
import QuoteTableView, { QuoteTableViewProps } from '../QuoteTableView';
import quoteTableClasses from '../quoteTableClasse';
import { getMockQuoteTicker, getMockQuoteTickerSymbol } from '../utils';
import {
  QuoteTicker,
  QuoteTickerSymbol,
  QuoteTickerSymbolMap,
  SortParams,
} from '../interfaces';

describe('Test QuoteTable', () => {
  let testTickers: QuoteTicker[];
  let previousData: QuoteTableViewProps['previousData'];
  let testTicker: QuoteTicker;
  let testTickerSymbol: QuoteTickerSymbol;
  let testSymbolMap: QuoteTickerSymbolMap;
  const defaultSortParams: SortParams = { type: 'down', field: 'last' };
  const dispatch = jest.fn();

  beforeEach(() => {
    testTicker = getMockQuoteTicker();
    testTickers = [testTicker];
    previousData = {
      [testTickers[0].symbol]: {
        ...testTickers[0],
        bid: '1000000',
        ask: '0.1',
      },
    };
    testTickerSymbol = getMockQuoteTickerSymbol(testTicker.symbol);
    testSymbolMap = {
      [testTickerSymbol.id]: testTickerSymbol,
    };
  });

  it('Default use', () => {
    render(
      <QuoteTableView
        data={testTickers}
        previousData={{}}
        symbolsMap={testSymbolMap}
        dispatch={dispatch}
        sortParams={defaultSortParams}
      />,
    );

    expect(byText(testTicker.last).get()).toBeInTheDocument();
  });

  it('Test dark theme', () => {
    render(
      <QuoteTableView
        data={[]}
        previousData={{}}
        themeDark
        symbolsMap={testSymbolMap}
        sortParams={defaultSortParams}
        dispatch={dispatch}
      />,
    );

    expect(byRole('table').get()).toHaveClass(quoteTableClasses.dark.table);
  });

  it('Test previous data', () => {
    render(
      <QuoteTableView
        data={testTickers}
        previousData={previousData}
        symbolsMap={testSymbolMap}
        sortParams={defaultSortParams}
        dispatch={dispatch}
      />,
    );

    expect(byText(testTicker.bid).get()).toHaveClass(
      quoteTableClasses.cellValueDawn,
    );
    expect(byText(testTicker.ask).get()).toHaveClass(
      quoteTableClasses.cellValueUp,
    );
  });
});

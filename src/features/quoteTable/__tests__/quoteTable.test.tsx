import React from 'react';
import { render } from '@testing-library/react';
import { byRole, byText } from 'testing-library-selector';
import QuoteTableView, {
  IQuoteTableViewProps,
} from '../../../views/components/QuoteTableView/QuoteTableView';
import quoteTableClasses from '../../../constants/quoteTableClasse';
import { getMockQuoteTicker, getMockQuoteTickerSymbol } from '../utils';
import {
  IQuoteTicker,
  IQuoteTickerSymbol,
  IQuoteTickerSymbolMap,
  ISortParams,
} from '../interfaces';

describe('Test QuoteTable', () => {
  let testTickers: IQuoteTicker[];
  let previousData: IQuoteTableViewProps['previousData'];
  let testTicker: IQuoteTicker;
  let testTickerSymbol: IQuoteTickerSymbol;
  let testSymbolMap: IQuoteTickerSymbolMap;
  const defaultSortParams: ISortParams = { type: 'down', field: 'last' };
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
        dispatch={dispatch}
        previousData={{}}
        sortParams={defaultSortParams}
        symbolsMap={testSymbolMap}
      />,
    );

    expect(byText(testTicker.last).get()).toBeInTheDocument();
  });

  it('Test dark theme', () => {
    render(
      <QuoteTableView
        data={[]}
        dispatch={dispatch}
        previousData={{}}
        sortParams={defaultSortParams}
        symbolsMap={testSymbolMap}
        themeDark
      />,
    );

    expect(byRole('table').get()).toHaveClass(quoteTableClasses.dark.table);
  });

  it('Test previous data', () => {
    render(
      <QuoteTableView
        data={testTickers}
        dispatch={dispatch}
        previousData={previousData}
        sortParams={defaultSortParams}
        symbolsMap={testSymbolMap}
      />,
    );

    expect(byText(testTicker.bid).get()).toHaveClass(quoteTableClasses.cellValueDawn);
    expect(byText(testTicker.ask).get()).toHaveClass(quoteTableClasses.cellValueUp);
  });
});

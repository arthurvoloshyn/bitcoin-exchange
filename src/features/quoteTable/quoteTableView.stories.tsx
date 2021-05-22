import React from 'react';
import { Story, Meta } from '@storybook/react';
import QuoteTableView, { QuoteTableViewProps } from './QuoteTableView';
import { getMockQuoteTicker, getMockQuoteTickerSymbol } from './utils';
import { IQuoteTickerSymbolMap } from './interfaces';

export default {
  title: 'features/QuoteTableView',
  component: QuoteTableView,
} as Meta;

const data = [getMockQuoteTicker(), getMockQuoteTicker(), getMockQuoteTicker()];
const previousData = {
  [data[0].symbol]: { ...data[0], bid: '1000000', ask: '0.1' },
};

const symbolsMap = data
  .map(ticker => {
    return getMockQuoteTickerSymbol(ticker.symbol);
  })
  .reduce((map, symbol) => {
    map[symbol.id] = symbol;

    return map;
  }, {} as IQuoteTickerSymbolMap);

const Template: Story<QuoteTableViewProps> = args => (
  <QuoteTableView {...args} />
);

export const DefaultUse = Template.bind({});

DefaultUse.args = {
  data,
  previousData,
  symbolsMap,
};

export const DarkThemeUse = Template.bind({});

DarkThemeUse.args = {
  data,
  previousData,
  themeDark: true,
  symbolsMap,
};

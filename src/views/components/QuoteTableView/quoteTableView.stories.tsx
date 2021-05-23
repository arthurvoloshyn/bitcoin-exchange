import React from 'react';
import { Story, Meta } from '@storybook/react';

import { getMockQuoteTicker, getMockQuoteTickerSymbol } from '../../../utils';
import QuoteTableView from './QuoteTableView';

import { IQuoteTicker, IQuoteTickerSymbolMap } from '../../../types/features';
import { IQuoteTableViewProps, PreviousData } from './types';

export default {
  title: 'features/QuoteTableView',
  component: QuoteTableView,
} as Meta;

const data: IQuoteTicker[] = [getMockQuoteTicker(), getMockQuoteTicker(), getMockQuoteTicker()];
const previousData: PreviousData = {
  [data[0].symbol]: { ...data[0], bid: '1000000', ask: '0.1' },
};

const symbolsMap: IQuoteTickerSymbolMap = data
  .map(({ symbol }) => getMockQuoteTickerSymbol(symbol))
  .reduce((map, symbol) => {
    map[symbol.id] = symbol;

    return map;
  }, {} as IQuoteTickerSymbolMap);

const Template: Story<IQuoteTableViewProps> = args => <QuoteTableView {...args} />;

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

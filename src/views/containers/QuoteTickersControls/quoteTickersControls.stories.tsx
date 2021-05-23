import React from 'react';

import { getTestProvider } from '../../../utils';
import QuoteTickersControls from './QuoteTickersControls';

export default {
  title: 'feature/QuoteTable/Controls',
  component: QuoteTickersControls,
};

const { TestProvider } = getTestProvider();

export const DefaultUse: React.VFC = () => (
  <TestProvider>
    <QuoteTickersControls />
  </TestProvider>
);

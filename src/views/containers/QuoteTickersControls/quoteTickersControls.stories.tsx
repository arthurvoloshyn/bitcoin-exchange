import React from 'react';
import QuoteTickersControls from './QuoteTickersControls';
import { getTestProvider } from '../../../utils/getTestProvider';

export default {
  title: 'feature/QuoteTable/Controls',
  component: QuoteTickersControls,
};

const { TestProvider } = getTestProvider();

export const DefaultUse = (): React.ReactElement => (
  <TestProvider>
    <QuoteTickersControls />
  </TestProvider>
);

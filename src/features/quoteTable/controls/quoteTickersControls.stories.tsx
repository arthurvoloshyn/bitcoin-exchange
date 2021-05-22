import React from 'react';
import { Meta } from '@storybook/react';
import QuoteTickersControls from './QuoteTickersControls';
import { getMockStoreTestProvider } from '../../../utils/getTestProvider';

export default {
  title: 'feature/QuoteTable/Controls',
  component: QuoteTickersControls,
};

const { TestProvider } = getMockStoreTestProvider();

export const DefaultUse = () => (
  <TestProvider>
    <QuoteTickersControls />
  </TestProvider>
);

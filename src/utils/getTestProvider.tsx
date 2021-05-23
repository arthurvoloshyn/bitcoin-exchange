import React from 'react';
import { Provider } from 'react-redux';

import ENV from '../constants/environment';
import getTestStore from './getTestStore';

import { ITestProvider } from '../types/utils';

const getTestProvider = (initState: any = {}): ITestProvider => {
  const store = getTestStore(initState);

  const TestProvider: React.FC<React.PropsWithChildren<any>> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  if (ENV.IS_DEV) TestProvider.displayName = 'TestProvider';

  return {
    TestProvider,
    store,
  };
};

export default getTestProvider;

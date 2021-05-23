import React from 'react';
import { Provider } from 'react-redux';

import ENV from '../constants/environment';
import getTestStore from './getTestStore';

const getTestProvider = (initState = {}) => {
  const store = getTestStore(initState);

  const TestProvider: React.FC = ({ children }: React.PropsWithChildren<any>) => (
    <Provider store={store}>{children}</Provider>
  );

  if (ENV.IS_DEV) TestProvider.displayName = 'TestProvider';

  return {
    TestProvider,
    store,
  };
};

export default getTestProvider;

import React from 'react';
import { Provider } from 'react-redux';
import getTestStore from './getTestStore';

const getTestProvider = (initState = {}) => {
  const store = getTestStore(initState);

  return {
    TestProvider: ({ children }: React.PropsWithChildren<any>) => (
      <Provider store={store}>{children}</Provider>
    ),
    store,
  };
};

export default getTestProvider;

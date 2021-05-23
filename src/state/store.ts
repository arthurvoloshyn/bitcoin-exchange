import { configureStore } from '@reduxjs/toolkit';

import ENV from '../constants/environment';
import tickersSlice from './ducks/quoteTable/tickersSlice';

const store = configureStore({
  reducer: {
    tickers: tickersSlice.reducer,
  },
  devTools: ENV.IS_DEV,
});

export default store;

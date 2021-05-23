import { configureStore } from '@reduxjs/toolkit';

import ENV from '../constants/environment';
import tickersSlice from './ducks/quoteTable/tickersSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersSlice.reducer,
  },
  devTools: ENV.IS_DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

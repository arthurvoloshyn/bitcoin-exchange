import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import ENV from '../constants/environment';
import tickersSlice from './ducks/quoteTable/tickersSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersSlice.reducer,
  },
  devTools: ENV.IS_DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

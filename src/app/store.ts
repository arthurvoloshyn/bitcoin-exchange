import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tickersSlice from '../features/quoteTable/store/tickersSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

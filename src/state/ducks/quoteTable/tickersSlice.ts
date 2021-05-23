import { createReducer } from '@reduxjs/toolkit';

import tickersActions from './actions';

import { ITickersState } from '../../../types/slices';
import { IQuoteTicker, IQuoteTickerSymbol } from '../../../types/features';

export const initialTickersState: ITickersState = {
  data: [],
  previousData: {},
  symbols: {},
  onLimit50: true,
  sortType: {
    field: 'last',
    type: 'down',
  },
  isDarkTheme: false,
};

const reducer = createReducer(initialTickersState, builder => {
  builder
    .addCase(tickersActions.tickers.set, ({ data }, { payload: tickersCache }) => {
      tickersCache.forEach((ticker: IQuoteTicker) => {
        data.push(ticker);
      });
    })
    .addCase(tickersActions.tickers.update, ({ data, previousData }, { payload: tickersCache }) => {
      Object.keys(previousData).forEach(id => delete previousData[id]);

      tickersCache.forEach(ticker => {
        const existIndex: number = data.findIndex(({ symbol }) => symbol === ticker.symbol);

        if (existIndex !== -1) {
          previousData[ticker.symbol] = { ...data[existIndex] };
          data[existIndex] = ticker;
        } else {
          data.push(ticker);
        }
      });
    })
    .addCase(tickersActions.symbols.set, ({ symbols }, { payload }) => {
      payload.forEach((symbol: IQuoteTickerSymbol) => {
        symbols[symbol.id] = symbol;
      });
    })
    .addCase(tickersActions.toggleDarkTheme, state => {
      state.isDarkTheme = !state.isDarkTheme;
    })
    .addCase(tickersActions.setSortType, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(tickersActions.toggleLimit, state => {
      state.onLimit50 = !state.onLimit50;
    });
});

const tickersSlice = {
  reducer,
  actions: tickersActions,
};

export default tickersSlice;

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

const { tickers, symbols, toggleDarkTheme, setSortType, toggleLimit } = tickersActions;

const reducer = createReducer(initialTickersState, builder => {
  builder
    .addCase(tickers.set, ({ data }, { payload: tickersCache }) => {
      tickersCache.forEach((ticker: IQuoteTicker) => {
        data.push(ticker);
      });
    })
    .addCase(tickers.update, ({ data, previousData }, { payload: tickersCache }) => {
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
    .addCase(symbols.set, ({ symbols }, { payload }) => {
      payload.forEach((symbol: IQuoteTickerSymbol) => {
        symbols[symbol.id] = symbol;
      });
    })
    .addCase(toggleDarkTheme, state => {
      state.isDarkTheme = !state.isDarkTheme;
    })
    .addCase(setSortType, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(toggleLimit, state => {
      state.onLimit50 = !state.onLimit50;
    });
});

const tickersSlice = {
  reducer,
  actions: tickersActions,
};

export default tickersSlice;

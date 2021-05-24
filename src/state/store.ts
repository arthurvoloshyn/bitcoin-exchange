import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import ENV from '../constants/environment';
import * as reducers from './ducks';

const store = configureStore({
  reducer: combineReducers(reducers),
  devTools: ENV.IS_DEV,
});

export default store;

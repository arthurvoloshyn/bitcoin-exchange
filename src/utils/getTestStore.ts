import { getDefaultMiddleware } from '@reduxjs/toolkit';
import configureStore, { MockStore } from 'redux-mock-store';
import { AppDispatch } from '../state/store';

const getTestStore = <State = {}>(initialState: State): MockStore<State> =>
  configureStore<State, AppDispatch>(
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  )(initialState);

export default getTestStore;

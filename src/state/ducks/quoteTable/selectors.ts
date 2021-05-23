import { RootState } from '../../store';
import { ITickersState } from './tickersSlice';

// eslint-disable-next-line import/prefer-default-export
export function tickersSelector(state: RootState): ITickersState {
  return state.tickers;
}

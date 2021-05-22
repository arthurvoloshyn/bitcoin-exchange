import { RootState } from '../../../app/store';

export function tickersSelector(state: RootState) {
  return state.tickers;
}

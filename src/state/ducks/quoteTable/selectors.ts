import { RootState } from '../../../types/store';
import { ITickersState } from '../../../types/slices';

// eslint-disable-next-line import/prefer-default-export
export const tickersSelector = ({ tickers }: RootState): ITickersState => tickers;

import { ISortParams } from '../../../types/features';
import { AppDispatch } from '../../../state/store';

export interface IQuoteTableHeadProps {
  dispatch: AppDispatch;
  sortParams: ISortParams;
}

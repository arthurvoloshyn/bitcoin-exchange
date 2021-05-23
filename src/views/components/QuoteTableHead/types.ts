import { ISortParams } from '../../../types/features';
import { AppDispatch } from '../../../types/store';

export interface IQuoteTableHeadProps {
  dispatch: AppDispatch;
  sortParams: ISortParams;
}

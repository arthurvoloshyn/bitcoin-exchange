import { AppDispatch } from '../../../types/store';
import { IQuoteTicker, IQuoteTickerSymbol, ISortParams } from '../../../types/features';

export type PreviousData = { [symbolId: string]: IQuoteTicker };

export interface IQuoteTableViewProps {
  data: IQuoteTicker[];
  previousData: PreviousData;
  themeDark?: boolean;
  symbolsMap: {
    [id: string]: IQuoteTickerSymbol;
  };
  sortParams: ISortParams;
  dispatch: AppDispatch;
}

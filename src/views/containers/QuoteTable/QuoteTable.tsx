import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getSortedTickers } from '../../../utils';
import tickerQueue from '../../../api/tickerQueue';
import { tickersWs } from '../../../api/socketConnect';
import QuoteTableView from '../../components/QuoteTableView/QuoteTableView';

import { ITickersState } from '../../../types/slices';
import { WebSocketApp } from '../../../types/utils';
import { IQuoteTicker } from '../../../types/features';
import { IQuoteTableProps } from './types';

const QuoteTable: React.FC<IQuoteTableProps> = ({ tickersState }) => {
  const dispatch = useDispatch();
  const { sortType: sortParams }: ITickersState = tickersState;

  useEffect(() => {
    const ws: WebSocketApp = tickersWs();

    tickerQueue(ws, dispatch);

    return () => {
      ws.close();
    };
  }, [dispatch]);

  const sortedTickers: IQuoteTicker[] = getSortedTickers(tickersState, sortParams);

  return (
    <QuoteTableView
      data={sortedTickers}
      dispatch={dispatch}
      previousData={tickersState.previousData}
      sortParams={sortParams}
      symbolsMap={tickersState.symbols}
      themeDark={tickersState.isDarkTheme}
    />
  );
};

export default QuoteTable;

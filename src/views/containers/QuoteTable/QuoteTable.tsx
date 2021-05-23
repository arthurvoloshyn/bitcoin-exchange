import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSortedTickers } from '../../../utils';
import { tickersSelector } from '../../../state/ducks/quoteTable/selectors';
import tickerQueue from '../../../api/tickerQueue';
import { tickersWs } from '../../../api/socketConnect';
import QuoteTableView from '../../components/QuoteTableView/QuoteTableView';

import { ITickersState } from '../../../state/ducks/quoteTable/tickersSlice';
import { WebSocketApp } from '../../../types/utils';
import { IQuoteTicker } from '../../../types/features';

const QuoteTable: React.FC = () => {
  const dispatch = useDispatch();
  const tickersState = useSelector(tickersSelector);
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

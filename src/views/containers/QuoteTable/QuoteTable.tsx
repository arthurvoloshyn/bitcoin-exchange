import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSortedTickers } from '../../../utils';
import { quoteTableSelectors } from '../../../state/ducks/quoteTable';
import tickerQueue from '../../../api/tickerQueue';
import { tickersWs } from '../../../api/socketConnect';
import QuoteTableView from '../../components/QuoteTableView/QuoteTableView';
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator';

import { ITickersState } from '../../../types/slices';
import { WebSocketApp } from '../../../types/utils';
import { IQuoteTicker } from '../../../types/features';

const QuoteTable: React.FC = () => {
  const dispatch = useDispatch();
  const tickersState = useSelector(quoteTableSelectors.tickersSelector);
  const { sortType: sortParams }: ITickersState = tickersState;

  useEffect(() => {
    const ws: WebSocketApp = tickersWs();

    tickerQueue(ws, dispatch);

    return () => {
      ws.close();
    };
  }, [dispatch]);

  const sortedTickers: IQuoteTicker[] = getSortedTickers(tickersState, sortParams);

  if (tickersState.error) {
    return <ErrorIndicator message={tickersState.error} />;
  }

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

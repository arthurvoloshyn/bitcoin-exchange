import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSortByField } from 'features/quoteTable/utils';
import { tickersSelector } from './store/selectors';
import QuoteTableView from './QuoteTableView';
import tickerQueue from './api/tickerQueue';
import { tickersWs } from './api/socketConnect';

const sortByLastDown = getSortByField('last', 'down');

export default function QuoteTable() {
  const dispatch = useDispatch();
  const tickersState = useSelector(tickersSelector);
  const sortParams = tickersState.sortType;

  useEffect(() => {
    const ws = tickersWs();

    tickerQueue(ws, dispatch);

    return () => {
      ws.close();
    };
  }, [dispatch]);

  let data = [...tickersState.data];

  data = data.sort(sortByLastDown);

  if (tickersState.onLimit50) {
    data = data.slice(0, 49);
  }

  data = data.sort(getSortByField(sortParams.field, sortParams.type));

  return (
    <QuoteTableView
      data={data}
      dispatch={dispatch}
      previousData={tickersState.previousData}
      sortParams={sortParams}
      symbolsMap={tickersState.symbols}
      themeDark={tickersState.isDarkTheme}
    />
  );
}

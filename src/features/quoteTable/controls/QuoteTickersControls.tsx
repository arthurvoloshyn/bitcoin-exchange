import React from 'react';
import { useDispatch } from 'react-redux';
import tickersSlice from '../store/tickersSlice';

export default function QuoteTickersControls() {
  const dispatch = useDispatch();

  return (
    <div aria-label="Quote Tickers controls">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(tickersSlice.actions.toggleLimit());
        }}
      >
        On / Off Limit tickers
      </button>
      &nbsp;
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(tickersSlice.actions.toggleDarkTheme());
        }}
      >
        On / Off Dark Theme
      </button>
    </div>
  );
}

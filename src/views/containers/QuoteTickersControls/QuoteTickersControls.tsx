import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import tickersSlice from '../../../state/ducks/quoteTable/tickersSlice';

import { ControlsBtn } from './types';

const QuoteTickersControls: React.FC = () => {
  const dispatch = useDispatch();

  const BTNS: ControlsBtn[] = [
    {
      id: 'Limit tickers',
      action: tickersSlice.actions.toggleLimit(),
      text: 'On / Off Limit tickers',
    },
    {
      id: 'Dark Theme',
      action: tickersSlice.actions.toggleDarkTheme(),
      text: 'On / Off Dark Theme',
    },
  ];

  return (
    <div aria-label="Quote Tickers controls">
      {BTNS.map(({ id, action, text }: ControlsBtn, i: number) => {
        const handleClick = (): void => {
          dispatch(action);
        };

        return (
          <Fragment key={id}>
            <button className="btn btn-primary" onClick={handleClick} type="button">
              {text}
            </button>
            {i !== BTNS.length - 1 && ' '}
          </Fragment>
        );
      })}
    </div>
  );
};

export default QuoteTickersControls;

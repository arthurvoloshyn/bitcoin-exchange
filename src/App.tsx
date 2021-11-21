import React from 'react';
import { useSelector } from 'react-redux';

import { quoteTableSelectors } from './state/ducks/quoteTable';
import QuoteTable from './views/containers/QuoteTable/QuoteTable';
import QuoteTickersControls from './views/containers/QuoteTickersControls/QuoteTickersControls';
import ErrorIndicator from './views/components/ErrorIndicator/ErrorIndicator';

import { ContainerRow } from './types/constants';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const tickersState = useSelector(quoteTableSelectors.tickersSelector);

  const ROWS: ContainerRow[] = [
    { id: 'quoteTickersControls', component: <QuoteTickersControls /> },
    { id: 'quoteTable', component: <QuoteTable tickersState={tickersState} /> },
  ];

  if (tickersState.error) {
    return <ErrorIndicator message={tickersState.error} />;
  }

  return (
    <div className="container-lg">
      {ROWS.map(({ id, component: Component }: ContainerRow) => (
        <div key={id} className="row pt-3">
          <div className="col">{Component}</div>
        </div>
      ))}
    </div>
  );
};

export default App;

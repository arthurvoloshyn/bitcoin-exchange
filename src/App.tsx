import React from 'react';

import QuoteTable from './views/containers/QuoteTable/QuoteTable';
import QuoteTickersControls from './views/containers/QuoteTickersControls/QuoteTickersControls';

import { ContainerRow } from './types/constants';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const ROWS: ContainerRow[] = [
    { id: 'quoteTickersControls', component: QuoteTickersControls },
    { id: 'quoteTable', component: QuoteTable },
  ];

  return (
    <div className="container-lg">
      {ROWS.map(({ id, component: Component }: ContainerRow) => (
        <div key={id} className="row pt-3">
          <div className="col">
            <Component />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

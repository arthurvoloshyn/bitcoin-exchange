import React from 'react';

import QuoteTable from './features/quoteTable/QuoteTableContainer';
import QuoteTickersControls from './features/quoteTable/controls/QuoteTickersControls';

import './App.css';

const App: React.FC = () => {
  const rows = [
    { id: 'quoteTickersControls', component: QuoteTickersControls },
    { id: 'quoteTable', component: QuoteTable },
  ];

  return (
    <div className="container-lg">
      {rows.map(({ id, component: Component }) => (
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

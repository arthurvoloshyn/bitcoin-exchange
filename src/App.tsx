import React from 'react';

import QuoteTable from './features/quoteTable/QuoteTableContainer';
import QuoteTickersControls from './features/quoteTable/controls/QuoteTickersControls';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="container-lg">
      <div className="row pt-3">
        <div className="col">
          <QuoteTickersControls />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12">
          <QuoteTable />
        </div>
      </div>
    </div>
  );
};

export default App;

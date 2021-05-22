import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import App from './App';

import './index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

reportWebVitals(console.log);

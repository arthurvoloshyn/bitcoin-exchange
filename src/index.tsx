import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ENV from './constants/environment';
import store from './state/store';
import ErrorBoundary from './views/components/ErrorBoundary/ErrorBoundary';
import App from './App';

import './index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

if (ENV.IS_DEV) reportWebVitals(console.log); // eslint-disable-line no-console

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// components custom
import FullLoading from 'components/Loading/FullLoading';
import ErrorBoundary from 'components/ErrorBoundary';

// mui config
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'config/theme';

// init app
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// mock

/* eslint-disable global-require */

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');
  worker.start();
}

/* eslint-enable global-require */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Suspense fallback={<FullLoading />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

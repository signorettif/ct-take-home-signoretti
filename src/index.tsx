import React from 'react';
import ReactDOM from 'react-dom';

import AppEntryPoint from './components/app/AppEntryPoint';

const root = document.getElementById('root') as HTMLElement;

// RnJhbmNlc2NvU2lnbm9yZXR0aTxzaWdub3JldHRpZkBvdXRsb29rLmNvbT4=

ReactDOM.render(
  <React.StrictMode>
    <AppEntryPoint />
  </React.StrictMode>,
  root
);

import React from 'react';
import ReactDOM from 'react-dom/client';

import AppEntryPoint from './components/app/AppEntryPoint';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppEntryPoint />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';

import AppEntryPoint from './components/app/AppEntryPoint';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <AppEntryPoint />
  </React.StrictMode>,
  root
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import App from './App';
import FloatingButton from './components/FloatingButton/FloatingButton';
import GlobalStyle from './Global.styles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById('extension')
);

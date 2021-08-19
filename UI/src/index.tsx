import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FloatingButton from './Component/FloatingButton';

document.querySelector('meta[property="og:url"]');
document.querySelector('meta[property="og:image"]');

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FloatingButton />
  </React.StrictMode>,
  document.getElementById('extension')
);

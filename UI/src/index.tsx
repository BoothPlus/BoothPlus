import React from 'react';
import ReactDOM from 'react-dom';

import FloatingButton from './Component/FloatingButton';
import Panel from './Component/Panel';

document.querySelector('meta[property="og:url"]');
document.querySelector('meta[property="og:image"]');

ReactDOM.render(
  <React.StrictMode>
    <Panel />
    <FloatingButton />
  </React.StrictMode>,
  document.getElementById('extension')
);

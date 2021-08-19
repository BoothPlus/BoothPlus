import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import FloatingButton from './Component/FloatingButton';
import Panel from './Component/Panel';

document.querySelector('meta[property="og:url"]')
document.querySelector('meta[property="og:image"]')

ReactDOM.render(
  <React.StrictMode>
    <Panel/>
    <FloatingButton />
  </React.StrictMode>,
  document.getElementById('extension')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

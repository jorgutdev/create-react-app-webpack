import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}
ReactDOM.render(<App />, document.getElementById('root'));
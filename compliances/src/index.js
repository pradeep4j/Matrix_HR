import React from 'react';
import ReactDOM from 'react-dom/client';

//bootstrap-theme file for bootstrap 3 only

import './index.css';
import './App.css';
import 'jquery/src/jquery'; //for bootstrap.min.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
//import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Routes } from './routes';
import "antd/dist/antd.css"; 
import './index.css';
// pada bagian import
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// setelah ReactDOM render
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();

ReactDOM.render(
  <React.StrictMode>
        <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

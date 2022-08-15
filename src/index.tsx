import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import AppDataPrivider from './context/AppDataContext';
ReactDOM.render(
  <BrowserRouter>
    <AppDataPrivider>
      
  <React.StrictMode>
    <App />
  </React.StrictMode>
     </AppDataPrivider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

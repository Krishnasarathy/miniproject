import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Make sure to import Provider from react-redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Pages/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
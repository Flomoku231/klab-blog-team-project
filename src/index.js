import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import counter from './Pages/ReduxPractice/CounterSlice';
import blogFetch from './Pages/ReduxPractice/FetchNews';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';


const store = configureStore({
  reducer: {
    counter,
    blogFetch
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



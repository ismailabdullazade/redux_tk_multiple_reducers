import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/User";
import themeReducer from "./features/Color";


const store = configureStore({
  reducer:{
    user:userReducer,
    theme:themeReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



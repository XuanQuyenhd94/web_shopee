import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterRender from './core/router/render-router'
import { BrowserRouter, ScrollRestoration } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-chat-elements/dist/main.css'
import 'react-toastify/dist/ReactToastify.css'
import './assets/CSS/base.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <BrowserRouter>        
        <RouterRender />
      </BrowserRouter>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

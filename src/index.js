import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
    store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  ><BrowserRouter>
    <App />
      </BrowserRouter>
      </Provider>
,document.getElementById('root')
);

serviceWorker.unregister();

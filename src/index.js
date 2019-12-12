import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {addUser} from "./actions";
import setupSocket from './sockets';
import createSagaMiddleware from 'redux-saga';
import handleNewMessage from './sagas';

import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);
// store.dispatch(addUser('Me'));

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

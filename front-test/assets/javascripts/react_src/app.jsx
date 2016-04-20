import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Main from './components/main.jsx';

import reducers from './reducers';
import { hashHistory,browserHistory, Router, Route, Link } from 'react-router'
import routes from './routes.jsx';
const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
    , document.getElementById("app"));
// <Router history={hashHistory} routes={routes}/>
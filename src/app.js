import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

// Views
import App from 'modules/app';
import Login from 'modules/login';

// Redux store
import * as reducers from './reducers';
const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(thunk),
);

// Render app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);


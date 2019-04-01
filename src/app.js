import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from 'modules/app';
import Login from 'modules/login';
import { PrivateRoute } from 'components';
import * as reducers from './reducers';

// Log state changes when in dev mode
const logger = (store) => (dispatch) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    const result = dispatch(action);
    console.info('%c[state] %s %o', 'color: #2866b5', action.type, store.getState());
    return result;
  }

  return dispatch(action);
}

// Redux store
const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(thunk, logger),
);

// Render app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);


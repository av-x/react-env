import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

@connect((state) => ({
  user: state.Auth.user,
}))
export default class PrivateRoute extends Component {
  render() {
    const { user, location, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => user
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: location } }} />
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.object,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  user: {},
  location: {},
};


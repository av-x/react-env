import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Dependency injection wrapper. Binds a config of action
 * creators to dispatch so they can be directly invoked.
 */
export default (config) => (DecoratedComponent) => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.actions = {};

      // bind action creators to dispatch
      Object.keys(config).map((key) => {
        this.actions[key] = bindActionCreators(config[key], props.dispatch);
      });
    }

    render() {
      return (
        <DecoratedComponent
          {...this.actions}
          {...this.props}
        />
      );
    }
  }

  return connect()(Wrapper);
}


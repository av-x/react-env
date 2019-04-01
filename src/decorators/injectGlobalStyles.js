import React, { Component } from 'react';
import GlobalStyles from 'styles';

/**
 * Global Styles injection
 */
export default () => (DecoratedComponent) => {
  class Wrapper extends Component {
    render() {
      return (
        <React.Fragment>
          <GlobalStyles />
          <DecoratedComponent />
        </React.Fragment>
      );
    }
  }

  return Wrapper;
}


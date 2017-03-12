import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent.jsx';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello world.
        <TestComponent />
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

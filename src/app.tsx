import React from 'react';

// global styles
import './style/global';
import './style/variables';
import './style/typography';
import './style/helpers';

// components
import { Button } from './components';

const App: React.FC = () => (
  <div>
    <Button text="Click me" theme="success" className="m-t-40 m-l-40" />
  </div>
);

export default App;

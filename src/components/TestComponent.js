import React from 'react';

import styles from '../styles.css';

export default class TestComponent extends React.Component {
  render() {
    return (
      <h1 className={styles.alert}>I am a test component.</h1>
    );
  }
}


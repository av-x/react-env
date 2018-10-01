import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

export default class App extends Component {
  render() {
    return (
      <Main>
        <h1>Home View</h1>
      </Main>
    );
  }
}


const Main = styled.main`
  position: relative;
  text-align: center;
  min-height: 100%;
  padding-bottom: 60px;

  h1 {
    font-size: 70px;
    font-weight: 100;
    color: #ff9b23;
    margin-bottom: 25px;
  }
`;


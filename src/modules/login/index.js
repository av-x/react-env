import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    user: false,
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    return this.setState({ [name]: value });
  }

  render() {
    const { user, email, password } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };

    if (user) {
      return <Redirect to={from} />;
    }

    return (
      <Main>
        <h1>Login view</h1>
      </Main>
    );
  }
}


const Main = styled.main`
  height: 100%;
  text-align: center;

  h1 {
    font-size: 70px;
    font-weight: 100;
    color: #ff9b23;
    margin-bottom: 25px;
  }
`;


import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Auth } from 'actions';
import { injectGlobalStyles, injectActions } from 'decorators';
import { Button, Input } from 'components';

@injectGlobalStyles()
@injectActions({ Auth })
@connect((state) => ({
  user: state.Auth.user,
}))
export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    return this.setState({ [name]: value });
  }

  login = () => {
    const { name, password } = this.state;
    const { Auth } = this.props;


    return Auth.login(name, password);
  }

  render() {
    const { user } = this.props;
    const { email, password } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };

    if (user) {
      return <Redirect to={from} />;
    }

    return (
      <Main>
        <h1>Login</h1>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
          required
        />

        <Button
          type="submit"
          disabled={!email || !password}
          text="Sign in"
          onClick={this.login}
        />
      </Main>
    );
  }
}


const Main = styled.main`
  text-align: center;

  h1 {
    font-size: 70px;
    font-weight: 100;
    color: #ff9b23;
    margin: 0;
    margin-bottom: 25px;
  }
`;


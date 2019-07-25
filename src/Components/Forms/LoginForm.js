import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import styled from 'styled-components';

import { login, logout } from '../../stateManagement/actions/loginActions';
import "./Login.css";

// const Backer = styled(Paper)`

// `;

const LoginForm = ({ currentUser, loginFailed, login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    login(username, password);

    setUsername('');
    setPassword('');
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (currentUser) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <div className = "body">
      <div className = "main">
        <p className = "sign" >Sign in</p>
        {loginFailed && <p>those credentials were incorrect</p>}
        <form onSubmit={signIn} className = "form1">
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            className = "un"
            placeholder = "Username"
          />
          <input 
            className = "pass"
            placeholder = "Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <input className = 'submit' type="submit" value="Sign In"  />
        </form>
        <Link to="/register">
          <p className = "forgot">
            Create Account
          </p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentUser, loginFailed }) => {
  return {
    currentUser,
    loginFailed
  }
};

export default connect(mapStateToProps, { login, logout })(LoginForm);
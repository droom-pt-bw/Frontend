import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { login, logout } from '../../stateManagement/actions'
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
    <div className = 'body'>
      {loginFailed && <p>those credentials were incorrect</p>}
      <div classname = 'main'>
        <p className = "sign" align = "center">Sign In</p>
      <form onSubmit={signIn} classname = "form1">
        <label htmlFor="">Username</label>
        <input
          className = "un"
          placeholder =  "Username"
          type="text"
          align = "center"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="">Password</label>
        <input 
          type="text"
          className = "pass"
          type = "password"
          placeholder = "Password"
          align = "center"
          value={password}
          onChange={handlePassword}
        />
        <a className = "submit" align = "center">Sign In</a>
        
      </form>
      
      <p>Not yet a member? Sign up here</p>
      <Link to="/register">
        <button>
          Create Account
        </button>
      </Link>
      <p className = "forgot" align="center"><a href = "#">Forgot Password?</a></p>
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
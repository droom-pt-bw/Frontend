import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login, logout } from '../../stateManagement/actions';

const LoginForm = ({ currentUser, loginFailed, login, logout }) => {
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
    <div>
      {loginFailed && <p>those credentials were incorrect</p>}

      <form onSubmit={signIn}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="">Password</label>
        <input 
          type="text"
          value={password}
          onChange={handlePassword}
        />
        <input type="submit" value="Sign In" />
      </form>
      {currentUser && <button onClick={logout}>Sign Out</button>}
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
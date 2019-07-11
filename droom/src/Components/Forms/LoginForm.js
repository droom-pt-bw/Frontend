import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginLocal, logoutLocal } from '../../stateManagement/actions';

const LoginForm = ({ currentUser, loginFailed, loginLocal, logoutLocal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    loginLocal(username, password);
    setUsername('');
    setPassword('');
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {currentUser && <h3>Hello, {currentUser.username}</h3>}
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
      {currentUser && <button onClick={logoutLocal}>Sign Out</button>}
    </div>
  );
};

const mapStateToProps = ({ currentUser, loginFailed }) => {
  return {
    currentUser,
    loginFailed
  }
};

export default connect(mapStateToProps, { loginLocal, logoutLocal })(LoginForm);
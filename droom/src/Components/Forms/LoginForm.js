import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.prevenDefault();
  };

  return (
    <div>
      <form>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
        />
        <label htmlFor="">Password</label>
        <input 
          type="text"
          value={password}
        />
        <button onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
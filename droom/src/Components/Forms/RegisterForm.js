import React, { useState } from 'react';
import { connect } from 'react-redux';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={submit}>
      <div>register</div>
      <label htmlFor="">Username</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
      <label htmlFor="">Email</label>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
      <label htmlFor="">Password</label>
      <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
      <input type="submit"/>
    </form>
  )
};

export default connect()(RegisterForm);
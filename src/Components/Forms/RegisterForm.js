import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../stateManagement/actions/registrationActions';

const RegisterForm = ({ register, currentUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCompany, setIsCompany] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    register({ username, password, email, isCompany });
  };

  if (currentUser) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form onSubmit={submit}>
      <div>register</div>

      <label htmlFor="">Username</label>
      <input 
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="">Email</label>
      <input 
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="">Password</label>
      <input 
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <label htmlFor="">User Type</label>
      <select 
        value={isCompany}
        onChange={e => setIsCompany(e.target.value)}
      >
        <option value={false}>Individual</option>
        <option value={true}>Company</option>
      </select>
      
      <input type="submit"/>
    </form>
  )
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { register })(RegisterForm);
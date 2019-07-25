import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

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
    <div className = "body">
      <div className = "main">
      <div className = "sign">Register Here</div>
      <form onSubmit={submit} className = "form1">
      <input 
        type="text"
        className = "un"
        placeholder = "UserName"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input 
        type="text"
        className = 'un'
        placeholder = "email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        className = "pass"
        type = "password"
        placeholder = "password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <label htmlFor="companySwitch">Individual</label>
        <Switch checked={isCompany} onChange={() => setIsCompany(!isCompany)} id="companySwitch" />
        <label htmlFor="companySwitch">Company</label>
      </div>
      
      <input type="submit" className = "submit" />
    </form>
      </div>
    </div>
    
  )
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { register })(RegisterForm);
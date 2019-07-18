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

//   function DropDown(el) {
//     this.dd = el;
//     this.placeholder = this.dd.children('span');
//     this.opts = this.dd.find('ul.dropdown > li');
//     this.val = '';
//     this.index = -1;
//     this.initEvents();
// }
// DropDown.prototype = {
//     initEvents : function() {
//         var obj = this;

//         obj.dd.on('click', function(event){
//             (this).toggleClass('active');
//             return false;
//         });

//         obj.opts.on('click',function(){
//             var opt = (this);
//             obj.val = opt.text();
//             obj.index = opt.index();
//             obj.placeholder.text(obj.val);
//         });
//     },
//     getValue : function() {
//         return this.val;
//     },
//     getIndex : function() {
//         return this.index;
//     }
// }

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

      <h1>Select</h1>
      <div className = "select"></div>
      <select 
        value={isCompany}
        onChange={e => setIsCompany(e.target.value)}
      >
        <option value={false}>Individual</option>
        <option value={true}>Company</option>
      </select>

      
      
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
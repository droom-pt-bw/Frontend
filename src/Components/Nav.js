import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../stateManagement/actions/loginActions';

const Nav = ({ username, isCompany, logout }) => {
  return (
    <nav>
      <h1>Droom</h1>
      <Link to="/">Home</Link>
      <Link to="#">Matches</Link>
      <Link to="/profileform">Profile</Link>
      {isCompany &&
        <Link to="/listings">Listings</Link>
      }
      {username
        ? <h3>{username}</h3>
        : <Link to="/login">Sign In</Link>
      }
      {username &&
        <button onClick={logout}>
          Sign Out
        </button>
      }
    </nav>
  )
};

const mapStateToProps = ({ currentUser }) => {
  
  return {
    username: currentUser ? currentUser.username : null,
    isCompany: currentUser ? currentUser.isCompany : false
  };
};

export default connect(mapStateToProps, { logout })(Nav);
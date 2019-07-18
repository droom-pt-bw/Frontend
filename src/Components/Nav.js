import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logout } from '../stateManagement/actions/loginActions';

const Bar = styled.nav`
  background: #FFFFFF;
  margin: 0;
  width: 100%;
  display: flex;
  box-shadow: 0px 5px 10px grey;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  

  .logo-div {

    font-size: 2.5rem;
    margin: 0 4rem;

  }

  & > div {
    display: flex;
    align-items: center;
  }
`;

const FancyLink = styled(Link)`
  background-color: #4F47B8;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;

const Nav = ({ username, isCompany, logout }) => {
  return (
    <Bar>
      <div>
        <div className = "logo-div">
          <strong>Droom</strong>
        </div>
        <FancyLink to="/">Home</FancyLink>
        <FancyLink to="#">Matches</FancyLink>
        <FancyLink to="/profileform">Profile</FancyLink>
        {isCompany &&
          <FancyLink to="/listings">Listings</FancyLink>
        }
      </div>
      <div>
        {username
          ? <h3>{username}</h3>
          : <FancyLink to="/login">Sign In</FancyLink>
        }
        {username &&
          <button onClick={logout}>
            Sign Out
          </button>
        }
      </div> 
    </Bar>
  );
};

const mapStateToProps = ({ currentUser }) => {
  
  return {
    username: currentUser ? currentUser.username : null,
    isCompany: currentUser ? currentUser.isCompany : false
  };
};

export default connect(mapStateToProps, { logout })(Nav);
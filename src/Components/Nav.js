import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logout } from '../stateManagement/actions/loginActions';

import logo from '../Droom-01.png';
import Avatar from './Common/Avatar';

const Bar = styled.nav`
  background: #F3EBF6;
  margin: 0;
  width: 100%;
  display: flex;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  margin: auto;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  position: fixed;
  

  .logo-div {

    font-size: 2.5rem;
    margin: 0 4rem;

  }

  & > div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  height: 2.2rem;
  width: 8rem;
  margin: 0 2rem;
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
        <Logo />
        <FancyLink to="/">Home</FancyLink>
        {username &&
          <FancyLink to="/profile">Profile</FancyLink>
        }
        {(username && !isCompany) &&
          <FancyLink to="/matches">Matches</FancyLink>
        }
      </div>
      <div>
        {username
          ? <Avatar>
              {username.toUpperCase()[0]}
            </Avatar>
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
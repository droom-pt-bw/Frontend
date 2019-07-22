import React, { useState } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core/';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { logout } from '../stateManagement/actions/loginActions';

import logo from '../Droom-01.png';
import Avatar from './Common/Avatar';
import Link from '../Components/Common/Link';

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
  padding: 1rem 2rem;

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
  margin-right: 2rem;
`;

const FancyLink = styled(Link)`
  background-color: #3329AF;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #4F47B8;
  }
`;

const Nav = ({ username, isCompany, logout }) => {
  const [popperAnchor, setPopperAnchor] = useState(null);

  const handleAvatarClick = (e) => {
    setPopperAnchor(popperAnchor ? null : e.currentTarget);
  };

  const handleClickAway = (e) => {
    setPopperAnchor(null);
  };

  return (
    <Bar>
      <div>
        <Logo />
        <FancyLink
          to="/"
        >
          Home
        </FancyLink>
        {username &&
          <FancyLink 
            to="/profile"
            variant="contained"
          >
            Profile
          </FancyLink>
        }
        {(username && !isCompany) &&
          <FancyLink
            to="/matches"
            variant="contained"
          >
            Matches
          </FancyLink>
        }
      </div>
      <div>
        {username
          ? <ClickAwayListener onClickAway={handleClickAway}>
              <div>
                <Avatar onClick={handleAvatarClick}>
                  {username.toUpperCase()[0]}
                </Avatar>
                <Popper open={Boolean(popperAnchor)} anchorEl={popperAnchor} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper onClick={() => setPopperAnchor(null)}>
                        <Link fullWidth to="/profile" >
                          Profile
                        </Link>
                        <Button fullWidth onClick={logout}>
                          Logout
                        </Button>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            </ClickAwayListener>  
          : <FancyLink to="/login">Sign In</FancyLink>
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
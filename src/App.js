import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Trianglify from 'trianglify';

import Login from './Components/Forms/LoginForm';
import UserProfileForm from './Components/Forms/UserProfileForm';
import NotFound from './Components/NotFound/NotFound';
import RegisterForm from './Components/Forms/RegisterForm';
import JobListingForm from './Components/Forms/JobListingForm';
import Home from './Components/HomePage/Home';
import PrivateRoute from './Components/PrivateRoute';
import Nav from './Components/Nav';
import { checkLoggedIn } from './stateManagement/actions/loginActions';

const pattern = Trianglify({
  height: 1080,
  width: 1920,
  cell_size: 40,
  stroke_width: 40,
  x_colors: ['#1D5FA3', '#3329AF', '#12A776', '#FBA11B'],
});

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #000;
    background: url(${pattern.png()}) no-repeat center center fixed;
    background-size: cover;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    @import url("https://fonts.googleapis.com/css?family=Ubuntu");
    font-family: 'Ubuntu', sans-serif;
  }
`;

function App ({ checkLoggedIn }) {
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profileform" component={UserProfileForm} />
            <Route path="/register" component={RegisterForm} />
            <PrivateRoute path="/listings/add" component={JobListingForm} />
            <PrivateRoute path="/listings/edit/:id" component={JobListingForm} />
            <Route path="*" component={NotFound} />
          </Switch> 
        </Router>
      </div>
    </>
  );
}

export default connect(null, { checkLoggedIn })(App);

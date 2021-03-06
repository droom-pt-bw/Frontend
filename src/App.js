import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Trianglify from 'trianglify';

import { checkLoggedIn } from './stateManagement/actions/loginActions';

import Login from './Components/Forms/LoginForm';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NotFound from './Components/NotFound/NotFound';
import RegisterForm from './Components/Forms/RegisterForm';
import JobListingForm from './Components/Forms/JobListingForm';
import Home from './Components/HomePage/Home';
import PrivateRoute from './Components/PrivateRoute';
import Nav from './Components/Nav';
import MatchesPage from './Components/MatchesPage/MatchesPage';
import ProfileForm from './Components/ProfilePage/ProfileEdit';
import { StylesProvider } from '@material-ui/styles';


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

const Container = styled.div`
  width: 100%;
  padding: 4rem;
`;

function App ({ checkLoggedIn }) {
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <div>
        <Router>
          <Nav />
          <Container>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={RegisterForm} />
              <PrivateRoute path="/profile" exact component={ProfilePage} />
              <PrivateRoute path="/profile/edit" component={ProfileForm} />
              <PrivateRoute path="/matches" component={MatchesPage} />
              <PrivateRoute path="/listings/add" component={JobListingForm} />
              <PrivateRoute path="/listings/edit/:id" component={JobListingForm} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default connect(null, { checkLoggedIn })(App);

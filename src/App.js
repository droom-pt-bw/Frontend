import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Components/Forms/LoginForm';
import UserProfileForm from './Components/Forms/UserProfileForm';
import NotFound from './Components/NotFound/NotFound';
import RegisterForm from './Components/Forms/RegisterForm';
import JobListingForm from './Components/Forms/JobListingForm';
import Home from './Components/HomePage/Home';
import PrivateRoute from './Components/PrivateRoute';
import Nav from './Components/Nav';
import { checkLoggedIn } from './stateManagement/actions/loginActions';
import Listings from './Components/ListingsPage/Listings';

function App ({ checkLoggedIn }) {
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profileform" component={UserProfileForm} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute path="/listings" exact component={Listings} />
          <PrivateRoute path="/listings/add" component={JobListingForm} />
          <PrivateRoute path="/listings/edit/:id" component={JobListingForm} />
          <Route path="*" component={NotFound} />
        </Switch> 
      </Router>
    </div>
  );
}

export default connect(null, { checkLoggedIn })(App);

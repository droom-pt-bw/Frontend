import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Components/Forms/LoginForm';
import UserProfile from './Components/Forms/userProfile';
import NotFound from './Components/NotFound/NotFound';
import RegisterForm from './Components/Forms/RegisterForm';
import Home from './Components/HomePage/Home';
import PrivateRoute from './Components/PrivateRoute';
import Nav from './Components/Nav';
import { checkLoggedIn } from './stateManagement/actions';

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
          <PrivateRoute path="/profileform" component={UserProfile} />
          <Route path="/register" component={RegisterForm}/>
          <Route path="*" component={NotFound} />
        </Switch> 
      </Router>
    </div>
  );
}

export default connect(null, { checkLoggedIn })(App);
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Components/Forms/LoginForm';
import UserProfile from './Components/Forms/userProfile';
import NotFound from './Components/NotFound/NotFound';
import RegisterForm from './Components/Forms/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profileform" component={UserProfile} />
          <Route path="/register" component={RegisterForm}/>
          <Route path="*" component={NotFound}/>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;

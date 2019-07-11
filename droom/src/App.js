import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/Forms/LoginForm';
import UserProfile from './Components/Forms/userProfile';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/profileform" component={UserProfile} />
        <Route path="*" component={NotFound}/>
      </Router>
    </div>
  );
}

export default App;

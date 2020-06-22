import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Route from './Route';

// Routes with login
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Routes without login
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />

        {/* <Route path="/" component={() => <h1>404</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

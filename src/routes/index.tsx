import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/signin';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}  />
    <Route path="/details/prof" component={Details} />
    <Route path ="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;

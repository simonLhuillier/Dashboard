import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './landingpage';
import Admin from './admin';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/admin" component={Admin} />
  </Switch>
)

export default Main;

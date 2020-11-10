import React from 'react';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from '@Constants/routes';

import Dashboard from '@Components/modules/dashboard';
import Login from '@Components/modules/login/loginForm';
import Signup from '@Components/modules/signup/index';
import PrivateRoute from '@Components/commons/routes/privateRoutes';

import history from '@Utils/history';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.LOGIN} component={Login} />
      <Route exact path={routes.SIGNUP} component={Signup} />
      <PrivateRoute path={routes.HOME} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;

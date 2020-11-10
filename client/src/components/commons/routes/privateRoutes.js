import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { withAuth, Security } from '@okta/okta-react';

import * as routes from '@Constants/routes';
import history from '@Utils/history';

import withAuthState from '@Components/hoc/auth';
import config from '../../../config';

const PrivateRoute = (props) => {
  const { isLoggedIn } = props;
  const {
    location: { search, pathname },
  } = props;

  function onAuthRequired({ history }) {
    history.push(routes.LOGIN);
  }

  if (!isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: routes.LOGIN,
          search,
          state: { referrer: pathname },
        }}
      />
    );
  }

  return (
    <Security
      issuer={config.okta.issuer}
      client_id={config.okta.client_id}
      redirect_uri={config.okta.redirect_uri}
      pkce={true}
      onAuthRequired={onAuthRequired}
    >
      <Route {...props} />
    </Security>
  );
};

PrivateRoute.defaultProps = {
  isLoggedIn: false,
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }),
};

export default withAuthState(PrivateRoute);

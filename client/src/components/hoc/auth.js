import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { signInUser, signOut } from '@Actions/users';
import history from '@Utils/history';
import { handleError } from '@Utils/errorHandler';
import * as toast from '@Utils/toast';

import * as routes from '../../constants/routes';

/**
 * Auth state Higher Order Component.
 * Use the HOC if you need to use/modify User state.
 */

const withAuthState = (WrappedComponent) => {
  function Auth(props) {
    const login = async (email, password) => {
      const { signInUser } = props;

      try {
        await signInUser({
          email,
          password,
        });

        const { state, search } = props.location;

        const path = state && state.referrer ? `${state.referrer}${search}` : routes.HOME;

        history.push(path);

        toast.success('You have successfully logged in into the system');
      } catch (err) {
        handleError(err, {
          title: 'Login Error',
          message: 'Incorrect Email or Password',
        });
      }
    };

    const logout = () => {
      const { signOut } = props;
      signOut();

      history.push(routes.LOGIN);

      toast.success('You have successfully logged out of the system');
    };

    return <WrappedComponent {...props} login={login} logout={logout} />;
  }

  const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  });

  const mapDispatchToProps = {
    signInUser,
    signOut,
  };

  Auth.defaultProps = {
    signInUser: () => {},
    signOut: () => {},
  };

  Auth.propTypes = {
    signInUser: PropTypes.func,
    signOut: PropTypes.func,
    location: PropTypes.shape({
      search: PropTypes.string,
      state: PropTypes.shape({
        referrer: PropTypes.string,
      }),
    }),
  };

  return connect(mapStateToProps, mapDispatchToProps)(Auth);
};

export default withAuthState;

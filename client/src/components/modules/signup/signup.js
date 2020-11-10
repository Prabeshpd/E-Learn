import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import history from '@Utils/history';
import * as routes from '@Constants/routes';
import { handleError } from '@Utils/errorHandler';
import { createUser } from '@Actions/users';

import * as toast from '@Utils/toast';

import SignupForm from './SignupForm';

function SignUp(props) {
  useEffect(() => {
    const { isLoggedIn } = props;
    if (isLoggedIn) {
      history.push(routes.HOME);
    }
  }, []);

  const signUp = async (values) => {
    const { createUser } = props;
    const { email, password, firstName, lastName } = values;
    try {
      await createUser({
        email,
        password,
        firstName,
        lastName,
      });

      toast.success('You have successfully created a user');
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
      <SignupForm signUp={signUp} />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.users.user,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  createUser,
};

SignUp.defaultProps = {
  user: {},
  createUser: () => {},
  isLoggedIn: false,
};

SignUp.propTypes = {
  isLoggedIn: PropTypes.bool,
  createUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

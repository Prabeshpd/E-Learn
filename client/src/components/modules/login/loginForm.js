import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withAuthState from '@Components/hoc/auth';

function LoginForm(props) {
  const { login } = props;
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={async (values) => {
        const { username, password } = values;
        await login(username, password);
      }}
    >
      {(props) => {
        return (
          <form onSubmit={props.handleSubmit}>
            <div className="form-element">
              <label>Username:</label>
              <input
                name="username"
                type="text"
                onChange={props.handleChange}
                error={props.errors.username && props.touched.username ? props.errors.username : ''}
              />
            </div>

            <div className="form-element">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                onChange={props.handleChange}
                error={props.errors.password && props.touched.password ? props.errors.password : ''}
              />
            </div>
            <input id="submit" type="submit" value="Submit" />
          </form>
        );
      }}
    </Formik>
  );
}

LoginForm.defaultProps = {
  login: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
  errors: {
    email: '',
    password: '',
  },
  touched: {
    email: false,
    password: false,
  },
};

LoginForm.propTypes = {
  login: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
  }),
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(withAuthState(LoginForm));

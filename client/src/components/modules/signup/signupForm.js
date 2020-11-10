import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

function SignUpFrorm(props) {
  const { signUp } = props;

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await signUp(values);
      }}
    >
      {(props) => (
        <>
          <div className="create-account">
            <h1 className="create-account__heading mt-0x">Create an Account</h1>

            <form onSubmit={props.handleSubmit}>
              <div className="form-element">
                <label>Email:</label>
                <input type="email" name="email" onChange={props.handleChange} />
              </div>
              <div className="form-element">
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={props.handleChange} />
              </div>
              <div className="form-element">
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={props.handleChange} />
              </div>
              <div className="form-element">
                <label>Password:</label>
                <input type="password" name="password" onChange={props.handleChange} />
              </div>
              <input type="submit" name="submit" value="Register" />
            </form>
          </div>
        </>
      )}
    </Formik>
  );
}

SignUpFrorm.defaultProps = {
  signUp: () => {},
  handleBlur: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  touched: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
};

SignUpFrorm.propTypes = {
  signUp: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    email: PropTypes.bool,
    password: PropTypes.bool,
  }),
};

export default SignUpFrorm;

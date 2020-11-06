import {
  SIGN_IN_USER_REJECTED,
  SIGN_IN_USER_PENDING,
  SIGN_IN_USER_FULFILLED,
  SIGN_OUT,
} from '@Actions/users';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_USER_PENDING:
      return {
        ...state,
      };
    case SIGN_IN_USER_REJECTED:
      return {
        ...state,
      };
    case SIGN_IN_USER_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };

    default:
      return state;
  }
};

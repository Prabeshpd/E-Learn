import {
  FETCH_USERS_PENDING,
  FETCH_USERS_REJECTED,
  FETCH_USERS_FULFILLED,
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_REJECTED,
  FETCH_CURRENT_USER_FULFILLED,
} from '@Actions/users';

const INITIAL_STATE = {
  user: {},
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      return {
        ...state,
        users: action.payload.data,
      };
    case FETCH_CURRENT_USER_FULFILLED:
      return {
        ...state,
        user: action.payload.data,
      };

    case FETCH_USERS_PENDING:
    case FETCH_USERS_REJECTED:
    case FETCH_CURRENT_USER_PENDING:
    case FETCH_CURRENT_USER_REJECTED:
    default:
      return state;
  }
};

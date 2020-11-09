import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import todos from './todos';

export default combineReducers({
  users,
  auth,
  todos,
});

import { createAction } from 'redux-actions';

import * as userService from '@Services/users';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_REJECTED = 'CREATE_USER_REJECTED';
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_IN_USER_PENDING = 'SIGN_IN_USER_PENDING';
export const SIGN_IN_USER_REJECTED = 'SIGN_IN_USER_REJECTED';
export const SIGN_IN_USER_FULFILLED = 'SIGN_IN_USER_FULFILLED';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_CURRENT_USER_PENDING = 'FETCH_CURRENT_USER_PENDING';
export const FETCH_CURRENT_USER_REJECTED = 'FETCH_CURRENT_USER_REJECTED';
export const FETCH_CURRENT_USER_FULFILLED = 'FETCH_CURRENT_USER_FULFILLED';

export const createUser = createAction(CREATE_USER, userService.create);
export const fetchCurrentUser = createAction(FETCH_CURRENT_USER, userService.fetchSelf);
export const fetchUsers = createAction(FETCH_USER, userService.fetchAll);
export const signInUser = createAction(SIGN_IN_USER, userService.signIn);

export const SIGN_OUT = 'SIGN_OUT';
export const signOut = createAction(SIGN_OUT, userService.signOut);

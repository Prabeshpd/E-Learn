import http from '@Utils/https';

import config from '../config';
import * as tokenService from './tokens';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth(config.okta);

/**
 * Fetch data of the logged in user.
 *
 * @returns {Promise}
 */
export async function fetchSelf() {
  const url = config.users.self;
  const { data } = await http.get(url);

  return data;
}

/**
 * Fetch ALl users.
 *
 * @returns {Promise}
 */
export async function fetchAll() {
  const url = config.users.all;
  const { data } = await http.get(url);

  return data;
}

export async function create(payload) {
  const url = config.users.create;
  const { data } = await http.post(url, payload);

  return data;
}

export async function signIn(payload) {
  console.log(payload);
  const { username, password } = payload;
  console.log(username, password);
  const user = await oktaAuth.signIn({
    username,
    password,
  });
  console.log(user);
  tokenService.persist(token);
  const { data } = await fetchSelf();

  return data;
}

export function signOut() {
  tokenService.clear();
}

/**
 * Refresh access token.
 *
 * @param {string} refreshToken
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export async function refresh(refreshToken) {
  const url = config.auth.refreshAccessToken;

  const { data } = await http.post(url, { refreshToken });

  return data;
}

import * as userService from '../services/users';

export async function createUser(payload) {
  try {
    let data = userService.createUser(payload);

    return data;
  } catch (e) {
    throw e;
  }
}

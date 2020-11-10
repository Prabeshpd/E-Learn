import * as userService from '../services/users';

export async function createUser(payload) {
  try {
    let data = await userService.createUser(payload);

    return data;
  } catch (e) {
    throw e;
  }
}

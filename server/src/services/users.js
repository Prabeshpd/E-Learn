import oktaClient from '../lib/okta';

export async function createUser(payload) {
  const { firstName, lastName, email, password } = payload;
  const newUSer = {
    profile: { firstName, lastName, email, login: email },
    credentials: { password: { value: password } },
  };
  console.log(newUSer);
  try {
    const user = await oktaClient.createUser(newUSer);
    return user;
  } catch (e) {
    console.log(e);
  }
}

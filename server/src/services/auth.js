import oktaClient from '../lib/okta';

export async function createUser(payload) {
  const { firstName, lastName, email, password } = payload;
  const newUSer = {
    profile: { firstName, lastName, email, login: email },
    credentials: { password: { value: password } },
  };

  return oktaClient.createUser(newUSer);
}

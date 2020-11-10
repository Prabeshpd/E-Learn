const config = {
  env: process.env.NODE_ENV || 'development',
  basename: process.env.REACT_APP_BASE_NAME || '/',
  backendAPI: {
    baseURI: process.env.BACK_END_PORTAL_API,
  },
  users: {
    create: '/users/signUp',
    fetchOne: '/users/:id',
    fetchAll: '/users',
    self: '/users/me',
  },
  auth: {
    signIn: '/users/signIn',
    refreshAccessToken: '/users/refreshTokens',
  },
  tasks: {
    create: '/tasks',
    fetchOne: '/tasks/:id',
    fetchUserTask: '/tasks/user/:userId',
  },
  okta: {
    url: process.env.OKTA_API_URL,
    issuer: process.env.OKTA_ISSUER,
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: process.env.OKTA_CLIENT_ID,
  },
};

export default config;

const config = {
  env: process.env.REACT_APP_ENV || 'development',
  basename: process.env.REACT_APP_BASE_NAME || '/',
  backendAPI: {
    baseURI: process.env.REACT_APP_API_BASE_URI,
  },
  endpoints: {
    users: {
      create: '/users',
      fetchOne: '/users/:id',
      fetchAll: '/users',
      self: '/users/me',
    },
    auth: {
      signIn: '/users/signIn',
      refreshAccessToken: '/users/refreshTokens',
    },
    todos: '/todos',
  },
};

export default config;

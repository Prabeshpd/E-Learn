const config = {
  env: process.env.NODE_ENV || 'development',
  basename: process.env.REACT_APP_BASE_NAME || '/',
  backendAPI: {
    baseURI: process.env.backendPortalAPI,
  },
  users: {
    create: '/users',
    fetchOne: '/users/:id',
    fetchAll: '/users',
    self: '/users/me',
  },
  tasks: {
    create: '/tasks',
    fetchOne: '/tasks/:id',
    fetchUserTask: '/tasks/user/:userId',
  },
};

export default config;

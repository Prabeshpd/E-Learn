import * as pkg from '../package.json';

const config = {
  node_env: process.env.NODE_ENV || 'development',
  app: {
    name: process.env.APP_NAME || pkg.name,
    version: process.env.APP_VERSION || pkg.version,
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || '0.0.0.0',
  },
  reactAppBaseURI: process.env.REACT_APP_BASE_URI,

  test: {
    port: process.env.TEST_APP_PORT,
  },

  okta: {
    host: process.env.OKTA_HOST,
    token: process.env.OKTA_TOKEN,
  },
};

export default config;

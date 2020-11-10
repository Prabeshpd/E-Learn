import * as pkg from '../package.json';

const config = {
  node_env: process.env.NODE_ENV || 'development',
  app: {
    name: process.env.APP_NAME || pkg.name,
    version: process.env.APP_VERSION || pkg.version,
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || '0.0.0.0',
  },
  reactAppBaseURI: process.env.REACT_APP_BASE_URI || 'http://localhost:3001',

  test: {
    port: process.env.TEST_APP_PORT,
  },

  okta: {
    host: process.env.OKTA_HOST || 'http://dev-8880385.okta.com',
    token: process.env.OKTA_TOKEN || '00SGHUd7EdEz5W1MOUivfxrkmklhmf21o6jDukNF10',
  },
};

export default config;

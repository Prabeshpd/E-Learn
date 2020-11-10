import okta from '@okta/okta-sdk-nodejs';

import config from '../config';
console.log(config.okta);
const {
  okta: { token, host },
} = config;
console.log(token, host);
const oktaInstance = new okta.Client({
  orgUrl: host,
  token,
});

export default oktaInstance;

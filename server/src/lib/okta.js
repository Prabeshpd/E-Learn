import okta from '@okta/okta-sdk-nodejs';

import config from '../../config';

const {
  okta: { token, host },
} = config;

const oktaInstance = new okta.Client({
  orgUrl: host,
  token,
});

export default oktaInstance;

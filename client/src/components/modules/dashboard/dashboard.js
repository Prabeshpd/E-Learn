import React from 'react';

import withAuthState from '@Components/hoc/auth';

const Dashboard = () => <div>Welcome to page</div>;

export default withAuthState(Dashboard);

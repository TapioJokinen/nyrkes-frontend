import React from 'react';

import OrgsContainer from '../components/orgs';
import { OrgsProvider } from '../context';
import Alert from '../features/alert/Alert';

const Orgs = () => (
  <OrgsProvider>
    <Alert />
    <OrgsContainer />
  </OrgsProvider>
);

export default Orgs;

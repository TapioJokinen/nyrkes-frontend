import React from 'react';

import Alert from '../components/alert';
import { UserOrgsProvider } from '../context';

const UserOrgs = () => (
  <UserOrgsProvider>
    <Alert />
    <p>Moi</p>
  </UserOrgsProvider>
);

export default UserOrgs;

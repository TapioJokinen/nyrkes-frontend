import React from 'react';

import Alert from '../components/alert';
import UserOrgsContainer from '../components/userOrgs';
import { UserOrgsProvider } from '../context';

const UserOrgs = () => (
  <UserOrgsProvider>
    <Alert />
    <UserOrgsContainer />
  </UserOrgsProvider>
);

export default UserOrgs;

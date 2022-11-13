import React from 'react';

import { Outlet } from 'react-router-dom';

import Alert from '../components/alert';
import NavBar from '../components/navbar';

const Root = () => (
  <>
    <Alert />
    <NavBar />
    <Outlet />
  </>
);

export default Root;

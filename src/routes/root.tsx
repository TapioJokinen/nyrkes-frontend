import React from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from '../components/navbar';

const Root = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Root;

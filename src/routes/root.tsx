import React, { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Alert from '../features/alert/Alert';
import NavBar from '../features/navbar/NavBar';

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home', { replace: true });
    }
  }, []);

  return (
    <>
      <Alert />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;

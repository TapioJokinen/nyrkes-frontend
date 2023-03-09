import React, { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import NavBar from '../components/navbar';
import Alert from '../features/alert/Alert';

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

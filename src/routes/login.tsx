import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Alert from '../components/alert';
import LoginDialog from '../components/login';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout(() => {
      navigate('/login', { replace: true });
    });
  }, []);

  return (
    <>
      <Alert />
      <LoginDialog />
    </>
  );
};

export default Login;

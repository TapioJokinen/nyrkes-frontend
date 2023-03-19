import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../app/services/auth';
import Alert from '../features/alert/Alert';
import LoginDialog from '../features/auth/login';

const Login = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const logoutUser = async () => {
      await logout();
      navigate('/login', { replace: true });
    };
    logoutUser();
  }, []);

  return (
    <>
      <Alert />
      <LoginDialog />
    </>
  );
};

export default Login;

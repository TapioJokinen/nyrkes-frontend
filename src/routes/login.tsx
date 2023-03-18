import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../app/services/auth';
import LoginDialog from '../components/login';
import Alert from '../features/alert/Alert';

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

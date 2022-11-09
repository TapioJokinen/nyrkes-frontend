import React, { useEffect } from 'react';

import Alert from '../components/alert';
import LoginDialog from '../components/login/LoginDialog';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.logout();
  }, []);

  return (
    <>
      <Alert />
      <LoginDialog />
    </>
  );
};

export default Login;

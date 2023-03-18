import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../app/hooks';
import LoginDialog from '../components/login';
import Alert from '../features/alert/Alert';
import { logoutUser } from '../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logoutUser());
    navigate('/login', { replace: true });
  }, []);

  return (
    <>
      <Alert />
      <LoginDialog />
    </>
  );
};

export default Login;

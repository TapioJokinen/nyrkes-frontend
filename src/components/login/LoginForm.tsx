import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

import LoginButton from './LoginButton';
import LoginForgotPwButton from './LoginForgotPwButton';
import LoginRegisterButton from './LoginRegisterButton';
import LoginTextField from './LoginTextField';
import { useAppDispatch } from '../../app/hooks';
import { useLoginMutation } from '../../app/services/auth';
import { setAlert } from '../../features/alert/alertSlice';
import { loginUser } from '../../features/auth/authSlice';
import { LOGIN_FAILED, LOGIN_SUCCESS } from '../../utils/alertMessages';

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  width: '360px',
  [theme.breakpoints.down('np')]: {
    width: '280px',
  },
  [theme.breakpoints.down('sp')]: {
    width: '100%',
  },
}));

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const from = location.state?.from?.pathname || '/home';

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      dispatch(loginUser());
      navigate(from, { replace: true });
      dispatch(setAlert({ severity: 'success', message: LOGIN_SUCCESS }));
    } catch (error) {
      dispatch(setAlert({ severity: 'error', message: LOGIN_FAILED }));
    }
  };

  return (
    <form onSubmit={handleClick}>
      <StyledBox>
        <Stack spacing={2}>
          <LoginTextField
            label="Email"
            variant="outlined"
            type="email"
            setState={setEmail}
          />
          <LoginTextField
            label="Password"
            variant="outlined"
            type="password"
            setState={setPassword}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LoginForgotPwButton />
            <LoginRegisterButton />
          </div>
          <LoginButton />
        </Stack>
      </StyledBox>
    </form>
  );
};

export default LoginForm;

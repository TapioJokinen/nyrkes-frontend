import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import LoginButton from './LoginButton';
import LoginForgotPwButton from './LoginForgotPwButton';
import LoginRegisterButton from './LoginRegisterButton';
import LoginTextField from './LoginTextField';

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

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    auth.signin(email, password, () => {
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    });
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

import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

interface PropTypes {
  email: string;
  password: string;
}

const StyledLoginButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  height: '60px',
  backgroundColor: theme.button.main,
  color: theme.background.light,
  '&.MuiButtonBase-root:hover': {
    color: theme.button.main,
    backgroundColor: theme.background.light,
    border: `2px solid ${theme.base.yellow}`,
  },
}));

const LoginButton = ({ email, password }: PropTypes) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/home';

  const handleClick = async () => {
    auth.signin(email, password, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <StyledLoginButton variant="contained" onClick={handleClick}>
      Sign in
    </StyledLoginButton>
  );
};

export default LoginButton;

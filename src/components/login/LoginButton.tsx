import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledLoginButton = styled(Button)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  height: '60px',
  backgroundColor: theme.button.main,
  color: theme.text.primary,
  transition: 'none',
  '&.MuiButtonBase-root:hover': {
    backgroundColor: theme.background.light,
    border: `3px solid ${theme.base.darkBlue}`,
  },
}));

const LoginButton = () => (
  <StyledLoginButton type="submit" variant="contained">
    Sign in
  </StyledLoginButton>
);

export default LoginButton;

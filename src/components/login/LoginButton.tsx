import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledLoginButton = styled(Button)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  height: '60px',
  backgroundColor: theme.button.main,
  color: theme.textfield.whiteFont,
  '&.MuiButtonBase-root:hover': {
    backgroundColor: theme.background.light,
    border: `2px solid ${theme.base.yellow}`,
  },
}));

const LoginButton = () => (
  <StyledLoginButton type="submit" variant="contained">
    Sign in
  </StyledLoginButton>
);

export default LoginButton;

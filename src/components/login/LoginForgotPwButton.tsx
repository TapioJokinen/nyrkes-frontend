import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledForgotPwButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  color: 'grey',
  textDecoration: 'underline',
  '&.MuiButtonBase-root:hover': {
    color: theme.base.yellow,
    backgroundColor: theme.background.light,
  },
}));

const LoginForgotPwButton = () => (
  <StyledForgotPwButton variant="text">Forgot your password?</StyledForgotPwButton>
);

export default LoginForgotPwButton;

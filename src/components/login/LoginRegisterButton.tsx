import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledRegisterButton = styled(Button)(({ theme }) => ({
  color: 'grey',
  '&.MuiButtonBase-root:hover': {
    color: theme.base.yellow,
    backgroundColor: theme.background.light,
  },
}));

const LoginRegisterButton = () => (<StyledRegisterButton>Register</StyledRegisterButton>);

export default LoginRegisterButton;

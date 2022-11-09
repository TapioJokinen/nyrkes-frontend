import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

interface PropTypes {
    title: string;
}

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'underline',
  color: theme.textfield.whiteFont,
  backgroundColor: theme.background.light,
  border: 'none',
}));

const LoginDialogTitle = ({ title }: PropTypes) => (
  <StyledDialogTitle>{title}</StyledDialogTitle>
);

export default LoginDialogTitle;

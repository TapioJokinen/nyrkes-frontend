import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

interface PropTypes {
    title: string;
}

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  color: theme.text.primary,
  backgroundColor: theme.background.light,
  border: 'none',
}));

const LoginDialogTitle = ({ title }: PropTypes) => (
  <StyledDialogTitle>{title}</StyledDialogTitle>
);

export default LoginDialogTitle;

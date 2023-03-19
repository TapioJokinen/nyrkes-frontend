import React from 'react';

import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

interface PropTypes {
    children: JSX.Element;
}

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.background.navbar,
}));

const LoginDialogContent = ({ children }: PropTypes) => (
  <StyledDialogContent>{children}</StyledDialogContent>
);

export default LoginDialogContent;

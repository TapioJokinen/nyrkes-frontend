import React from 'react';

import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import Zoom from '@mui/material/Zoom';

import LoginDialogContent from './LoginDialogContent';
import LoginDialogTitle from './LoginDialogTitle';
import LoginForm from './LoginForm';

const Transition = React.forwardRef((
  props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
  ref: React.Ref<unknown>,
) => <Zoom style={{ transitionDelay: '0ms', transitionDuration: '225ms' }} ref={ref} {...props} />);

const StyledDialog = styled(Dialog)(({ theme }) => ({
  border: 'none',
  '& .MuiPaper-root': {
    backgroundColor: theme.background.main,
  },
}));

const LoginDialog = () => (
  <StyledDialog open TransitionComponent={Transition} hideBackdrop>
    <LoginDialogTitle title="Sign in" />
    <LoginDialogContent>
      <LoginForm />
    </LoginDialogContent>
  </StyledDialog>
);

export default LoginDialog;

import React from 'react';

import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import Zoom from '@mui/material/Zoom';

import LoginDialogContent from './LoginDialogContent';
import LoginDialogTitle from './LoginDialogTitle';
import LoginForm from './LoginForm';

const welcomeTexts = [
  'Hello, sunshine!',
  'What’s kickin',
  'little chicken?',
  'Peek-a-boo!',
  'Howdy-doody!',
  'Ahoy, matey!',
  'I like your face.',
  "What's cookin",
  "good lookin'?",
  '‘Ello, mate.',
  "I'm Batman.",
  'Top of the mornin’ to ya!',
  '(ɔ◔‿◔)ɔ ♥',
  '(👍≖‿‿≖)👍 👍(≖‿‿≖👍)',
];

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
    border: `1px solid ${theme.base.darkBlue}`,
  },
}));

const LoginDialog = () => (
  <StyledDialog open TransitionComponent={Transition} hideBackdrop>
    <LoginDialogTitle title={welcomeTexts[Math.floor(Math.random() * welcomeTexts.length)]} />
    <LoginDialogContent>
      <LoginForm />
    </LoginDialogContent>
  </StyledDialog>
);

export default LoginDialog;

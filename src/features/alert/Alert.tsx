import React from 'react';

import { Alert as MUIAlert } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import capitalize from '../../utils/tools';
import {
  selectMessage, selectOpen, selectSeverity, clearAlert,
} from './alertSlice';

const Alert = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpen);
  const severity = useAppSelector(selectSeverity);
  const message = useAppSelector(selectMessage);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    dispatch(clearAlert());
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={matches
        ? { vertical: 'top', horizontal: 'center' }
        : { vertical: 'bottom', horizontal: 'left' }}
    >
      <MUIAlert
        variant="filled"
        severity={severity}
        onClose={handleClose}
        sx={{ width: '100%' }}
      >
        <AlertTitle>{capitalize(severity)}</AlertTitle>
        {message}
      </MUIAlert>
    </Snackbar>
  );
};
export default Alert;

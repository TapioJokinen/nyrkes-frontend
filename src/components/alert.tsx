import React from 'react';

import { Alert as MUIAlert } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import useAlert from '../hooks/useAlert';
import capitalize from '../utils/capitalize';

const Alert = () => {
  const alert = useAlert();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Snackbar
      open={alert.open}
      onClose={alert.clearAlert}
      autoHideDuration={5000}
      anchorOrigin={matches
        ? { vertical: 'top', horizontal: 'center' }
        : { vertical: 'bottom', horizontal: 'left' }}
    >
      <MUIAlert
        variant="filled"
        severity={alert.severity}
        onClose={alert.clearAlert}
        sx={{ width: '100%' }}
      >
        <AlertTitle>{capitalize(alert.severity)}</AlertTitle>
        {alert.message}
      </MUIAlert>
    </Snackbar>
  );
};
export default Alert;

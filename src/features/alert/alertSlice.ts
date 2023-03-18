import { AlertColor } from '@mui/material/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

interface AlertState {
    open: boolean,
    severity: AlertColor,
    message: string
}

interface SetAlertParams {
  severity: AlertColor,
  message: string
}

const initialState: AlertState = {
  open: false,
  severity: 'error',
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<SetAlertParams>) => ({
      ...state, open: true, severity: action.payload.severity, message: action.payload.message,
    }),
    clearAlert: (state) => ({ ...state, open: false }),
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export const selectOpen = (state: RootState) => state.alert.open;
export const selectSeverity = (state: RootState) => state.alert.severity;
export const selectMessage = (state: RootState) => state.alert.message;

export default alertSlice.reducer;

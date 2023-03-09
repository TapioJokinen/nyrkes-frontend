import { AlertColor } from '@mui/material/Alert';
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

interface AlertState {
    open: boolean,
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
    setOpen: (state, action: PayloadAction<boolean>) => ({ ...state, open: action.payload }),
    setSeverity: (state, action: PayloadAction<AlertColor>) => (
      { ...state, severity: action.payload }
    ),
    setMessage: (state, action: PayloadAction<string>) => ({ ...state, message: action.payload }),
  },
});

export const { setOpen, setSeverity, setMessage } = alertSlice.actions;

export const selectOpen = (state: RootState) => state.alert.open;
export const selectSeverity = (state: RootState) => state.alert.severity;
export const selectMessage = (state: RootState) => state.alert.message;

export default alertSlice.reducer;

export const setAlert = (severity: AlertColor, message: string) => (
  dispatch: Dispatch<PayloadAction<boolean | AlertColor | string>>,
) => {
  dispatch(setOpen(true));
  dispatch(setSeverity(severity));
  dispatch(setMessage(message));
};

export const clearAlert = () => (
  dispatch: Dispatch<PayloadAction<boolean | AlertColor | string>>,
) => {
  dispatch(setOpen(initialState.open));
  dispatch(setSeverity(initialState.severity));
  dispatch(setMessage(initialState.message));
};

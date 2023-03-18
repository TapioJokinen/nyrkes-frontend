import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

interface AuthState {
    loggedIn: boolean
}

const initialState: AuthState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: () => initialState,
    loginUser: (state) => ({ ...state, loggedIn: true }),
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;

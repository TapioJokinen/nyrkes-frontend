import { createSlice } from '@reduxjs/toolkit';

import { authApi } from '../../app/services/auth';
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
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state) => ({ ...state, loggedIn: true }),
    );
    builder.addMatcher(
      authApi.endpoints.login.matchRejected,
      (state) => ({ ...state, loggedIn: false }),
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state) => ({ ...state, loggedIn: false }),
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchRejected,
      (state) => ({ ...state, loggedIn: false }),
    );
    builder.addMatcher(
      authApi.endpoints.verify.matchFulfilled,
      (state) => ({ ...state, loggedIn: true }),
    );
    builder.addMatcher(
      authApi.endpoints.verify.matchRejected,
      (state) => ({ ...state, loggedIn: false }),
    );
  },
});

export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;

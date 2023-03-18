import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi } from './services/auth';
import { orgsApi } from './services/orgs';
import alertReducer from '../features/alert/alertSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [orgsApi.reducerPath]: orgsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(orgsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

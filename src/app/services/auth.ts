import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './baseFetch';

const { REACT_APP_REQUEST_CREDENTIALS } = process.env;

export interface LoginRequest {
    email: string
    password: string
  }

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/token/',
        method: 'POST',
        body: credentials,
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/token/blacklist/',
        method: 'POST',
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
    verify: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/token/verify/',
        method: 'POST',
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useVerifyMutation } = authApi;

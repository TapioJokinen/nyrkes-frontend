import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './baseFetch';
import { URL_BLACKLIST_TOKENS, URL_TOKENS, URL_VERIFY_TOKEN } from '../../common/utils/urls';

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
        url: URL_TOKENS,
        method: 'POST',
        body: credentials,
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: URL_BLACKLIST_TOKENS,
        method: 'POST',
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
    verify: builder.mutation<void, void>({
      query: () => ({
        url: URL_VERIFY_TOKEN,
        method: 'POST',
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useVerifyMutation } = authApi;

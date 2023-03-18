import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './baseFetch';
import { Org } from '../../types';
import { URL_USER_ORGS } from '../../utils/urls';

const { REACT_APP_REQUEST_CREDENTIALS } = process.env;

export const orgsApi = createApi({
  reducerPath: 'orgsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUserOrgs: builder.query<Org[], void>({
      query: () => ({
        url: URL_USER_ORGS,
        method: 'GET',
        credentials: REACT_APP_REQUEST_CREDENTIALS,
      }),
    }),
  }),
});

export const { useGetUserOrgsQuery } = orgsApi;

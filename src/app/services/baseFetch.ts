import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { URL_BLACKLIST_TOKENS, URL_REFRESH_TOKEN } from '../../common/utils/urls';

const { REACT_APP_BASE_URL, REACT_APP_API_VERSION_V1 } = process.env;

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_BASE_URL,
  method: 'POST',
  prepareHeaders(headers) {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', REACT_APP_API_VERSION_V1);
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs, unknown, FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          URL_REFRESH_TOKEN,
          api,
          extraOptions,
        );
        if (refreshResult.data) {
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          await baseQuery(
            URL_BLACKLIST_TOKENS,
            api,
            extraOptions,
          );
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReauth;

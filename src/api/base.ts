import { URL_REFRESH_TOKEN, REACT_APP_BASE_URL, URL_BLACKLIST_TOKENS } from '../utils/urls';

const controller = new AbortController();

const { REACT_APP_API_VERSION_V1, REACT_APP_REQUEST_CREDENTIALS, NODE_ENV } = process.env;
type RequestInfo = Request | string;

const fetchWithRetry = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<Response> => {
  const response = await fetch(input, init);
  if (response.status === 401) {
    const refreshed = await fetch(URL_REFRESH_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: REACT_APP_API_VERSION_V1,
      },
      credentials: REACT_APP_REQUEST_CREDENTIALS,
      body: JSON.stringify({}),
    });
    if (!refreshed.ok) {
      fetch(URL_BLACKLIST_TOKENS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: REACT_APP_API_VERSION_V1,
        },
        credentials: REACT_APP_REQUEST_CREDENTIALS,
        body: JSON.stringify({}),
      })
        .finally(() => controller.abort());

      if (NODE_ENV === 'development') {
        window.location.href = 'http://localhost:3000/login';
      } else {
        window.location.href = `${REACT_APP_BASE_URL}/login`;
      }
    } else {
      const retryResponse = await fetch(input, init);
      return retryResponse;
    }
  }
  return response;
};

export const post = async (url: string, body: any) => {
  const response = await fetchWithRetry(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: REACT_APP_API_VERSION_V1,
    },
    credentials: REACT_APP_REQUEST_CREDENTIALS,
    body: JSON.stringify(body),
  });
  return response;
};

export const get = async (url: string) => {
  const response = await fetchWithRetry(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: REACT_APP_API_VERSION_V1,
    },
    credentials: REACT_APP_REQUEST_CREDENTIALS,
  });
  return response;
};

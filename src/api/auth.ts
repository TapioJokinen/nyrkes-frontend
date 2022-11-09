import { URL_TOKENS, URL_VERIFY_TOKEN } from '../utils/urls';

const { REACT_APP_API_VERSION_V1 } = process.env;

export const getTokens = async (email: string, password: string): Promise<Response> => {
  const response = await fetch(URL_TOKENS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: REACT_APP_API_VERSION_V1,
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const verifyToken = async (): Promise<Response> => {
  const response = await fetch(URL_VERIFY_TOKEN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: REACT_APP_API_VERSION_V1,
    },
    credentials: 'include',
    body: JSON.stringify({}),
  });
  return response;
};

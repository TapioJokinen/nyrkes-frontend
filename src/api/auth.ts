import { post } from './base';
import { URL_TOKENS, URL_VERIFY_TOKEN, URL_BLACKLIST_TOKENS } from '../utils/urls';

export const getTokens = async (email: string, password: string): Promise<Response> => {
  const response = post(URL_TOKENS, { email, password });
  return response;
};

export const verifyToken = async (): Promise<Response> => {
  const response = post(URL_VERIFY_TOKEN, {});
  return response;
};

export const blacklistToken = async (): Promise<Response> => {
  const response = post(URL_BLACKLIST_TOKENS, {});
  return response;
};

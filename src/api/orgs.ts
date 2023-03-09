import { URL_USER_ORGS } from '../utils/urls';
import { get } from './base';

const getOrgs = async (): Promise<Response> => {
  const response = get(URL_USER_ORGS);
  return response;
};

export default getOrgs;

import { URL_USER_ORGS } from '../utils/urls';
import { get } from './base';

const getUserOrgs = async (): Promise<Response> => {
  const response = get(URL_USER_ORGS);
  return response;
};

export default getUserOrgs;

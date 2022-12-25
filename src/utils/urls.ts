export const { REACT_APP_BASE_URL } = process.env;

// Auth
export const URL_TOKENS = `${REACT_APP_BASE_URL}/auth/token/`;
export const URL_VERIFY_TOKEN = `${REACT_APP_BASE_URL}/auth/token/verify/`;
export const URL_BLACKLIST_TOKENS = `${REACT_APP_BASE_URL}/auth/token/blacklist/`;
export const URL_REFRESH_TOKEN = `${REACT_APP_BASE_URL}/auth/token/refresh/`;

// Organizations
export const URL_USER_ORGS = `${REACT_APP_BASE_URL}/api/organizations/`;

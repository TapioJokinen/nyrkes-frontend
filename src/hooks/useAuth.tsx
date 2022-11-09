import React from 'react';

import { AuthContext } from '../context';

const useAuth = () => React.useContext(AuthContext);

export default useAuth;

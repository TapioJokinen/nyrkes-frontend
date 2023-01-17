import React from 'react';

import { UserOrgsContext } from '../context';

const useUserOrgs = () => React.useContext(UserOrgsContext);

export default useUserOrgs;

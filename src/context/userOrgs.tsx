import React, { useState, useMemo, useEffect } from 'react';

import getUserOrgs from '../api/userOrgs';
import useAlert from '../hooks/useAlert';
import { USER_ORG_FETCH_FAILED } from '../utils/alertMessages';

interface Org {
    id: number,
    dateAdded: string
    dateUpdated: string,
    name: string,
    altName: string,
    ownerId: number,
    logo: string,
    membersCount: number,
}

interface UserOrgsContextType {
    orgs: Array<Org> | null
}

const UserOrgsContext = React.createContext<UserOrgsContextType>(null!);

const UserOrgsProvider = ({ children }: {children: React.ReactNode}) => {
  const alert = useAlert();
  const [orgs, setOrgs] = useState<Array<Org> | null>(null);

  useEffect(() => {
    getUserOrgs()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert.setAlert('error', USER_ORG_FETCH_FAILED);
      })
      .then((data) => setOrgs(data))
      .catch(() => alert.setAlert('error', USER_ORG_FETCH_FAILED));
  }, []);

  const value = useMemo(() => ({
    orgs,
  }), [orgs]);

  return <UserOrgsContext.Provider value={value}>{children}</UserOrgsContext.Provider>;
};

export { UserOrgsContext, UserOrgsProvider };

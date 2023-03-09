import React, { useState, useMemo, useEffect } from 'react';

import getOrgs from '../api/orgs';
import { useAppDispatch } from '../app/hooks';
import { setAlert } from '../features/alert/alertSlice';
import { USER_ORG_FETCH_FAILED } from '../utils/alertMessages';

interface Org {
    id: number,
    dateAdded: string
    dateUpdated: string,
    name: string,
    altName: string,
    ownerId: number,
    logo: string,
    slug: string,
    membersCount: number,
}

interface OrgsContextType {
    orgs: Array<Org> | null
}

const OrgsContext = React.createContext<OrgsContextType>(null!);

const OrgsProvider = ({ children }: {children: React.ReactNode}) => {
  const dispatch = useAppDispatch();
  const [orgs, setOrgs] = useState<Array<Org> | null>(null);

  useEffect(() => {
    getOrgs()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        dispatch(setAlert('error', USER_ORG_FETCH_FAILED));
      })
      .then((data) => setOrgs(data))
      .catch(() => dispatch(setAlert('error', USER_ORG_FETCH_FAILED)));
  }, []);

  const value = useMemo(() => ({
    orgs,
  }), [orgs]);

  return <OrgsContext.Provider value={value}>{children}</OrgsContext.Provider>;
};

export { OrgsContext, OrgsProvider };

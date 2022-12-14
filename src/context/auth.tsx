import React, { useMemo, useState, useCallback } from 'react';

import { blacklistToken, getTokens } from '../api/auth';
import useAlert from '../hooks/useAlert';
import {
  LOGIN_FAILED, LOGIN_SUCCESS,
} from '../utils/alertMessages';

interface AuthContextType {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  signin: (email: string, password: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const alert = useAlert();
  const [logged, setLogged] = useState<boolean>(false);

  const signingFailed = useCallback(() => {
    setLogged(false);
    alert.setAlert('error', LOGIN_FAILED);
  }, []);

  const signingSuccessfull = useCallback(() => {
    setLogged(true);
    alert.setAlert('success', LOGIN_SUCCESS);
  }, []);

  const signin = useCallback(
    (
      email: string,
      password: string,
      callback: VoidFunction,
    ): void => {
      getTokens(email, password)
        .then((res) => {
          if (res.ok) {
            signingSuccessfull();
            callback();
          } else {
            signingFailed();
          }
        })
        .catch(() => signingFailed());
    },
    [],
  );

  const logout = useCallback((callback: VoidFunction) => {
    blacklistToken().finally(() => callback());
  }, []);

  const value = useMemo(() => ({
    logged, setLogged, signin, logout,
  }), [logged, setLogged, signin, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

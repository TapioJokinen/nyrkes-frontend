import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';

import { verifyToken } from '../../api/auth'; // eslint-disable-line

import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();
  const response = useFetch(verifyToken, []);

  if (response.error) {
    auth.logout();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

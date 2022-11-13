import React from 'react';

import { useNavigate } from 'react-router-dom';

import { verifyToken } from '../../api/auth';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const response = useFetch(verifyToken, []);

  if (response.error) {
    auth.logout(() => {
      navigate('/login', { replace: true });
    });
  }

  if (response.ok) {
    return children;
  }

  return <div />;
};

export default RequireAuth;

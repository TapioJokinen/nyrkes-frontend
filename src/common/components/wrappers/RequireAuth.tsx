import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useLogoutMutation, useVerifyMutation } from '../../../app/services/auth';
import { setAlert } from '../../../features/alert/alertSlice';
import { selectLoggedIn } from '../../../features/auth/authSlice';
import { VERIFYING_USER_FAILED } from '../../utils/alertMessages';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector(selectLoggedIn);
  const [verify] = useVerifyMutation();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const verifyUser = async () => {
      if (!loggedIn) {
        try {
          await verify().unwrap();
        } catch (error) {
          await logout().finally(() => navigate('/login', { replace: true }));
          dispatch(setAlert({ severity: 'warning', message: VERIFYING_USER_FAILED }));
        }
      }
    };
    verifyUser();
  }, []);

  if (loggedIn) {
    return children;
  }

  return <div />;
};

export default RequireAuth;

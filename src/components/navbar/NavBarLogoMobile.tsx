import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavBarLogoMobile = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <IconButton onClick={() => navigate('/home', { replace: true })}>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: theme.base.darkBlue }} />
    </IconButton>
  );
};

export default NavBarLogoMobile;

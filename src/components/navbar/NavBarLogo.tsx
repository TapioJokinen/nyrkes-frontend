import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavBarLogo = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <IconButton onClick={() => navigate('/home')}>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: theme.base.yellow }} />
    </IconButton>
  );
};

export default NavBarLogo;

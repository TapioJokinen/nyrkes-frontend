import React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { NAV_BAR_SETTINGS } from '../../utils/constants';

interface PropTypes {
    handleCloseUserMenu: () => void;
    anchorElUser: null | HTMLElement;
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.background.light,
    border: `1px solid ${theme.textfield.whiteFont}`,
  },
  '& .MuiMenuItem-root:hover': {
    backgroundColor: theme.background.hover,
  },
}));

const NavBarUserMenu = (props: PropTypes) => {
  const { anchorElUser, handleCloseUserMenu } = props;
  const auth = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/login', { replace: true });
    });
  };
  return (
    <StyledMenu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {NAV_BAR_SETTINGS.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center" color={theme.textfield.whiteFont}>{setting}</Typography>
        </MenuItem>
      ))}
      <MenuItem key="logout" onClick={handleLogout} sx={{ backgroundColor: '#B73E3E' }}>
        <Typography textAlign="center" color="white">Logout</Typography>
      </MenuItem>
    </StyledMenu>
  );
};

export default NavBarUserMenu;

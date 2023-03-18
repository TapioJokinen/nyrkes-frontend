import React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../../app/services/auth';
import { NAV_BAR_SETTINGS } from '../../utils/constants';

interface PropTypes {
    handleCloseUserMenu: () => void;
    anchorElUser: null | HTMLElement;
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.background.navbar,
    border: `1px solid ${theme.text.primaryWhite}`,
  },
  '& .MuiList-root': {
    paddingBottom: '4px',
    paddingTop: '4px',
  },
  '& .MuiMenuItem-root:hover': {
    backgroundColor: theme.background.navbar,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  '&:hover': {
    textDecoration: `underline ${theme.link.hover}`,
  },
}));

const StyledMenuItemLogout = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.link.active,
  marginLeft: '3px',
  marginRight: '3px',
  '&.MuiMenuItem-root:hover': {
    backgroundColor: theme.link.active,
    textDecoration: `underline ${theme.link.hover}`,
  },
}));

const NavBarUserMenu = (props: PropTypes) => {
  const { anchorElUser, handleCloseUserMenu } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout().finally(() => navigate('/login', { replace: true }));
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
          <StyledTypography textAlign="center" color={theme.text.primaryWhite}>
            {setting}
          </StyledTypography>
        </MenuItem>
      ))}
      <StyledMenuItemLogout key="logout" onClick={handleLogout}>
        <StyledTypography textAlign="center" color="white">Logout</StyledTypography>
      </StyledMenuItemLogout>
    </StyledMenu>
  );
};

export default NavBarUserMenu;

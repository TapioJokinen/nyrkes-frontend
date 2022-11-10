import React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { NAV_BAR_SETTINGS } from '../../utils/constants';

interface PropTypes {
    handleCloseUserMenu: () => void;
    anchorElUser: null | HTMLElement;
}

const NavBarUserMenu = (props: PropTypes) => {
  const { anchorElUser, handleCloseUserMenu } = props;
  return (
    <Menu
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
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NavBarUserMenu;

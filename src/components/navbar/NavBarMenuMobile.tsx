import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { NAV_BAR_PAGES } from '../../utils/constants';

interface PropTypes {
    handleOpenNavMenu: (e: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: (e: React.MouseEvent<HTMLElement>) => void;
    anchorElNav: null | HTMLElement;
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

const NavBarMenuMobile = (props: PropTypes) => {
  const {
    handleOpenNavMenu, handleCloseNavMenu, anchorElNav,
  } = props;
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {NAV_BAR_PAGES.map((page) => (
          <MenuItem
            key={page.name}
            component={Link}
            to={page.path}
            onClick={handleCloseNavMenu}
          >
            <Typography
              textAlign="center"
              color={theme.textfield.whiteFont}
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default NavBarMenuMobile;

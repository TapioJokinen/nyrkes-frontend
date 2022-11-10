import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import NavBarLogo from './NavBarLogo';
import NavBarLogoMobile from './NavBarLogoMobile';
import NavBarMenu from './NavBarMenu';
import NavBarPages from './NavBarPages';
import NavBarTitle from './NavBarTitle';
import NavBarTitleMobile from './NavBarTitleMobile';
import NavBarUser from './NavBarUser';
import NavBarUserMenu from './NavBarUserMenu';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <NavBarLogo />
          <NavBarTitle />
          <NavBarMenu
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <NavBarLogoMobile />
          <NavBarTitleMobile />
          <NavBarPages handleCloseNavMenu={handleCloseNavMenu} />
          <Box sx={{ flexGrow: 0 }}>
            <NavBarUser handleOpenUserMenu={handleOpenUserMenu} />
            <NavBarUserMenu handleCloseUserMenu={handleCloseUserMenu} anchorElUser={anchorElUser} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

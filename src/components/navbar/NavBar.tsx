import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import NavBarLogo from './NavBarLogo';
import NavBarLogoMobile from './NavBarLogoMobile';
import NavBarMenuMobile from './NavBarMenuMobile';
import NavBarPages from './NavBarPages';
import NavBarTitle from './NavBarTitle';
import NavBarTitleMobile from './NavBarTitleMobile';
import NavBarUser from './NavBarUser';
import NavBarUserMenu from './NavBarUserMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  '&.MuiPaper-root': {
    backgroundColor: theme.background.light,
  },
}));

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
    <StyledAppBar position="static" elevation={2}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ minHeight: { xs: '48px', md: '71px' } }}>
          <NavBarLogo />
          <NavBarTitle />
          <NavBarMenuMobile
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <NavBarLogoMobile />
          <NavBarTitleMobile />
          <NavBarPages />
          <Box sx={{ flexGrow: 0 }}>
            <NavBarUser handleOpenUserMenu={handleOpenUserMenu} />
            <NavBarUserMenu handleCloseUserMenu={handleCloseUserMenu} anchorElUser={anchorElUser} />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default NavBar;

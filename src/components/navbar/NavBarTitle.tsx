import React from 'react';

import Typography from '@mui/material/Typography';

import { NAV_BAR_TITLE } from '../../utils/constants';

const NavBarTitle = () => (
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    {NAV_BAR_TITLE}
  </Typography>
);

export default NavBarTitle;

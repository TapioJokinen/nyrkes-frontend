import React from 'react';

import Typography from '@mui/material/Typography';

import { NAV_BAR_TITLE } from '../../common/utils/constants';

const NavBarTitleMobile = () => (
  <Typography
    variant="h5"
    noWrap
    component="a"
    href=""
    sx={{
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
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

export default NavBarTitleMobile;

import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { NAV_BAR_PAGES } from '../../utils/constants';

interface PropTypes {
    handleCloseNavMenu: () => void;
}

const NavBarPages = (props: PropTypes) => {
  const { handleCloseNavMenu } = props;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {NAV_BAR_PAGES.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavBarPages;

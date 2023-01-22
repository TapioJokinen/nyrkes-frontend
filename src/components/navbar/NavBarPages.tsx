import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import { NAV_BAR_PAGES } from '../../utils/constants';

// Styled components won't work with Button 'component' property.

const NavBarPages = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {NAV_BAR_PAGES.map((page) => (
        <Button
          key={page.name}
          component={Link}
          to={page.path}
          sx={{
            my: 2,
            width: '100px',
            display: 'block',
            textAlign: 'center',
            borderBottom: location.pathname === page.path ? `2px solid ${theme.base.darkBlue}` : '',
            color: theme.text.primary,
            transition: 'none',
            '&.MuiButtonBase-root:hover': {
              borderBottom: `2px solid ${theme.base.darkBlue}`,
              backgroundColor: theme.background.light,
            },
          }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};

export default NavBarPages;

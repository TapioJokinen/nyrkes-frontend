import React from 'react';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface PropTypes {
    handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

const NavBarUser = (props: PropTypes) => {
  const { handleOpenUserMenu } = props;
  return (
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
  );
};

export default NavBarUser;

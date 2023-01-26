import React from 'react';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Skeleton from '@mui/material/Skeleton';
import { styled, useTheme } from '@mui/material/styles';

import useUserOrgs from '../../hooks/useUserOrgs';
import UserOrgCard from './UserOrgCard';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '500px',
  maxWidth: '500px',
  maxHeight: 'calc(100vh - 130px)',
  marginRight: 50,
  marginTop: 30,
  marginLeft: 'auto',
  padding: 1,
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    width: 'inherit',
    minWidth: 0,
    boxShadow: 'none',
    margin: 'auto',
    marginTop: 20,
  },
  backgroundColor: '#EDEDED',
}));

const StyledSkeleton = styled(Skeleton)(() => ({
  margin: 'auto',
  backgroundColor: 'rgb(255 255 255 / 16%)',
  width: 'auto',
  height: '100px',
}));

const StyledListItem = styled(ListItem)(() => ({
  display: 'block',
  margin: 'auto',
  marginBlockStart: '0.5em',
  marginBlockEnd: '0.5em',
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
}));

const UserOrgsContainer = () => {
  const userOrgs = useUserOrgs();
  const theme = useTheme();
  return (
    <StyledBox sx={{ boxShadow: 5 }}>
      <List subheader={(
        <ListSubheader
          component="div"
          sx={{
            backgroundColor: 'inherit',
            color: theme.text.primaryBlack,
            fontSize: '1.5em',
            position: 'static',
          }}
        >
          Your Organizations
          <Divider sx={{ borderColor: theme.text.secondaryBlack }} />
        </ListSubheader>
      )}
      >
        {userOrgs.orgs ? userOrgs.orgs.map((org) => (
          <StyledListItem key={org.id}>
            <UserOrgCard org={org} />
          </StyledListItem>

        )) : <StyledSkeleton />}

      </List>
    </StyledBox>
  );
};

export default UserOrgsContainer;

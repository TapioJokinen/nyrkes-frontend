import React from 'react';

import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Skeleton from '@mui/material/Skeleton';
import { styled, useTheme } from '@mui/material/styles';

import OrgCard from './OrgCard';
import { useGetUserOrgsQuery } from '../../app/services/orgs';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '500px',
  maxWidth: '500px',
  maxHeight: 'calc(100vh - 130px)',
  backgroundColor: theme.list.background,
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

const StyledTypography = styled(Typography)(() => ({
  margin: '16px',
}));

const OrgsContainer = () => {
  const theme = useTheme();
  const { data, isLoading, isSuccess } = useGetUserOrgsQuery();
  return (
    <StyledBox sx={{ boxShadow: 5 }}>
      <List subheader={(
        <ListSubheader
          component="div"
          sx={{
            backgroundColor: 'inherit',
            color: theme.text.primaryWhite,
            fontSize: '1.5em',
            position: 'static',
          }}
        >
          Your Organizations
          <Divider sx={{ borderColor: theme.text.secondaryWhite }} />
        </ListSubheader>
      )}
      >
        {isSuccess && data.map((org) => (
          <StyledListItem key={org.id}>
            <OrgCard org={org} />
          </StyledListItem>

        ))}
        {isLoading && <StyledSkeleton />}
        {isSuccess && data.length <= 0
        && (
        <StyledTypography>
          You are not part of any organization :(
          {' '}
          <a href="www.google.com">Create your own!</a>
        </StyledTypography>
        )}
      </List>
    </StyledBox>
  );
};

export default OrgsContainer;

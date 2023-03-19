import React from 'react';

import AddHomeIcon from '@mui/icons-material/AddHome';
import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import LinkCard from '../../common/components/cards/LinkCard';

// TODO: Make better descriptions.
const linkCards = [
  <LinkCard
    key="user-orgs"
    Icon={GroupsIcon}
    to="/orgs"
    title="Your Organizations."
    description="All the stuff related to Your Organizations can be found here."
  />,
  <LinkCard
    key="create-org"
    Icon={AddHomeIcon}
    to="/create-org"
    title="Create an Organization."
    description="Create your own Organization."
  />,
];

const LinkContainer = () => (
  <Box sx={{ flexGrow: 1, maxWidth: 1000, m: { xs: '2rem auto', sm: '5rem auto' } }}>
    <Grid
      container
      columns={{ xs: 2, sm: 8, md: 12 }}
      sx={{ display: { md: 'flex' }, justifyContent: 'center', width: '100%' }}
    >
      {linkCards.map((c) => (
        <Grid
          key={`grid-${c.key}`}
          xs={2}
          sm={Math.round(12 / linkCards.length) < 4 ? 4 : Math.round(12 / linkCards.length)}
          md={Math.round(12 / linkCards.length) < 4 ? 4 : Math.round(12 / linkCards.length)}
          sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2 } }}
        >
          {c}
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default LinkContainer;

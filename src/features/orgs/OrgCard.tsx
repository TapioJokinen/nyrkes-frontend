import React from 'react';

import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { Org } from '../../common/types';
import { REACT_APP_BASE_URL } from '../../common/utils/urls';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.list.item,
  '&.MuiCard-root:hover': {
    backgroundColor: theme.button.hover,
    border: `2px solid ${theme.base.secondaryBlue}`,
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  display: 'flex',
  width: '100%',
  height: 85,
  maxWidth: 85,
  margin: '5px',
}));

const StyledCardContent = styled(CardContent)(() => ({
  width: '100%',
  maxHeight: 85,
  '&.MuiCardContent-root:last-child': {
    padding: 0,
    paddingBottom: 0,
  },
}));

const StyledTypographyMain = styled(Typography)(({ theme }) => ({
  maxWidth: '288px',
  marginLeft: 5,
  fontSize: '1.25em',
  color: theme.text.primaryWhite,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const StyledTypographySub = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBlockEnd: 0,
  marginBlockStart: 0,
  marginLeft: 5,
  fontSize: '1em',
  color: theme.text.secondaryWhite,
}));

const StyledGridItem = styled(Grid)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  marginTop: 12,
  marginRight: 5,
}));

interface PropTypes {
    org: Org
}

const OrgCard = (props: PropTypes) => {
  const { org } = props;
  const theme = useTheme();
  return (
    <StyledCard elevation={5}>
      <CardActionArea LinkComponent={Link} href={`/orgs/${org.slug}`}>
        <Stack direction="row">
          <StyledCardMedia
            image={`${REACT_APP_BASE_URL}/media/${org.logo}`}
            title="org-logo"
          />
          <StyledCardContent>
            <StyledTypographyMain gutterBottom>
              {org.name}
            </StyledTypographyMain>
            <Grid container direction="column">
              <Grid xs={10}>
                <StyledTypographySub gutterBottom>
                  {org.altName}
                </StyledTypographySub>
              </Grid>
              <StyledGridItem xs={2}>
                <StyledBox>
                  <GroupsIcon sx={{ color: theme.base.mainBlue }} />
                  <StyledTypographySub gutterBottom>
                    {org.membersCount}
                  </StyledTypographySub>
                </StyledBox>
              </StyledGridItem>
            </Grid>
          </StyledCardContent>
        </Stack>
      </CardActionArea>
    </StyledCard>
  );
};

export default OrgCard;

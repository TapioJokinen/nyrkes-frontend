import React from 'react';

import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { REACT_APP_BASE_URL } from '../../utils/urls';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.base.darkGrey,
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
  textShadow: '1px 1px black',
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

interface Org {
    id: number,
    dateAdded: string
    dateUpdated: string,
    name: string,
    altName: string,
    ownerId: number,
    logo: string,
    membersCount: number,
}

interface PropTypes {
    org: Org
}

const UserOrgCard = (props: PropTypes) => {
  const { org } = props;
  const theme = useTheme();
  return (
    <StyledCard>
      <CardActionArea>
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
              <Grid xs={6}>
                <StyledTypographySub gutterBottom>
                  {org.altName}
                </StyledTypographySub>
              </Grid>
              <StyledGridItem xs={6}>
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

export default UserOrgCard;

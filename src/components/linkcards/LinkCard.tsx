import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface PropTypes {
  Icon: SvgIconComponent;
  to: string;
  title: string;
  description: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: 375,
  height: 130,
  color: theme.textfield.whiteFont,
  '&.MuiCard-root': {
    backgroundColor: theme.background.light,
    border: `2px solid ${theme.base.yellow}`,
  },
  '&.MuiCard-root:hover': {
    backgroundColor: theme.background.hover,
    border: `2px solid ${theme.base.grey}`,
  },
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  marginRight: '15px',
  justifyContent: 'center',
  verticalAlign: 'text-bottom',
  textAlign: 'center',
  alignItems: 'center',
}));

const LinkCard = (props: PropTypes) => {
  const {
    Icon, to, title, description,
  } = props;
  return (
    <StyledCard elevation={10}>
      <CardActionArea component={Link} to={to}>
        <CardContent>
          <StyledBox>
            <Icon sx={{ fontSize: '3.5rem', mr: 1 }} />
            <Typography variant="h6">{title}</Typography>
          </StyledBox>
          <Typography sx={{ fontSize: '.8rem', opacity: 0.6 }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default LinkCard;

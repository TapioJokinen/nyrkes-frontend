import React from 'react';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface PropTypes {
    label: string;
    variant: 'outlined';
    type: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  // Autofill
  'input:-webkit-autofill': {
    '-webkit-text-fill-color': theme.text.primaryWhite,
    '-webkit-box-shadow': `0 0 0 100px ${theme.background.navbar} inset`,
  },
  // Placeholder
  '& .MuiInputLabel-animated': {
    color: 'grey',
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: 'green',
  },
  // Text color
  '& .MuiInputBase-input': {
    color: theme.text.primaryWhite,
  },
  // Shrinked label
  '& .MuiInputLabel-shrink': {
    fontSize: '1rem',
    color: 'grey',
  },
  // Shrinked label when focused
  '& label.Mui-focused': {
    color: theme.base.mainBlue,
  },
  // Shrinked label color when text and not focused
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
      borderWidth: '2px',
    },
    // On hover
    '&:hover fieldset': {
      borderColor: theme.base.mainBlue,
      borderWidth: '2px',
    },
    // On focused
    '&.Mui-focused fieldset': {
      borderColor: theme.base.mainBlue,
      borderWidth: '2px',
    },
  },
}));

const LoginTextField = ({
  label, variant, type, setState,
}: PropTypes) => (
  <StyledTextField
    label={label}
    variant={variant}
    type={type}
    onChange={(e) => setState(e.target.value)}
    autoComplete="on"
  />
);
export default LoginTextField;

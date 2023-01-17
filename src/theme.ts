import React from 'react';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      base: {
        lightBlue: React.CSSProperties['color'];
        darkBlue: React.CSSProperties['color'];
        darkGrey: React.CSSProperties['color'];
      };
      background: {
        main: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
      }
      text: {
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
      };
    }
    interface ThemeOptions {
      base: {
        lightBlue: React.CSSProperties['color'];
        darkBlue: React.CSSProperties['color'];
        darkGrey: React.CSSProperties['color'];
      };
      background: {
        main: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
      }
      text: {
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
      };
    }
    interface BreakpointOverrides {
      sp: true; // Small phone (iPhone SE and like that)
      np: true // Normal phone (Oneplus 9, iPhone XR,...)
    }
  }

const theme = createTheme({
  base: {
    lightBlue: '#BBE1FA',
    darkBlue: '#0F4C75',
    darkGrey: '#212121',
  },
  background: {
    main: '#1B262C',
    light: '#2C3333',
  },
  button: {
    main: '#2C3333',
  },
  text: {
    primary: '#EDEDED',
    secondary: '#ffffffb3',
  },
  typography: {
    fontFamily: '"IBM Plex Sans Condensed",'
    + '"Ubuntu Mono", "Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  breakpoints: {
    values: {
      xs: 0,
      sp: 380,
      np: 415,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

import React from 'react';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      base: {
        grey: React.CSSProperties['color'];
        yellow: React.CSSProperties['color'];
      };
      background: {
        main: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
      }
      textfield: {
        whiteFont: React.CSSProperties['color'];
      };
    }
    interface ThemeOptions {
      base: {
        grey: React.CSSProperties['color'];
        yellow: React.CSSProperties['color'];
      };
      background: {
        main: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
      }
      textfield: {
        whiteFont: React.CSSProperties['color'];
      };
    }
    interface BreakpointOverrides {
      sp: true; // Small phone (iPhone SE and like that)
      np: true // Normal phone (Oneplus 9, iPhone XR,...)
    }
  }

const theme = createTheme({
  base: {
    grey: 'grey',
    yellow: 'yellow',
  },
  background: {
    main: 'rgba(0, 0, 0, 0.93)',
    light: 'rgba(59, 59, 59, 1)',
    hover: 'rgba(0, 0, 0, 0.50)',
  },
  button: {
    main: '#4f4f4f',
  },
  textfield: {
    whiteFont: '#EDEDED',
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

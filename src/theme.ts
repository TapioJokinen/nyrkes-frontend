import React from 'react';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      base: {
        secondaryBlue: React.CSSProperties['color'];
        mainBlue: React.CSSProperties['color'];
        darkGrey: React.CSSProperties['color'];
      };
      icon: {
        main: React.CSSProperties['color'];
      }
      background: {
        main: React.CSSProperties['color'];
        navbar: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      }
      link: {
        active: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      }
      text: {
        primaryWhite: React.CSSProperties['color'];
        secondaryWhite: React.CSSProperties['color'];
        primaryBlack: React.CSSProperties['color'];
        secondaryBlack: React.CSSProperties['color'];
      };
    }
    interface ThemeOptions {
      base: {
        mainBlue: React.CSSProperties['color'];
        secondaryBlue: React.CSSProperties['color'];
        darkGrey: React.CSSProperties['color'];
      };
      icon: {
        main: React.CSSProperties['color'];
      }
      background: {
        main: React.CSSProperties['color'];
        navbar: React.CSSProperties['color'];
      };
      button: {
        main: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      }
      link: {
        active: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
      }
      text: {
        primaryWhite: React.CSSProperties['color'];
        secondaryWhite: React.CSSProperties['color'];
        primaryBlack: React.CSSProperties['color'];
        secondaryBlack: React.CSSProperties['color'];
      };
    }
    interface BreakpointOverrides {
      sp: true; // Small phone (iPhone SE and like that)
      np: true // Normal phone (Oneplus 9, iPhone XR,...)
    }
  }

const theme = createTheme({
  base: {
    mainBlue: '#08D9D6',
    secondaryBlue: '#BBE1FA',
    darkGrey: '#212121',
  },
  icon: {
    main: '#08D9D6',
  },
  background: {
    main: '#EEEEEE',
    navbar: '#252A34',
  },
  button: {
    main: '#2C3333',
    hover: '#476072',
  },
  link: {
    active: '#FF2E63',
    hover: '#EAEAEA',
  },
  text: {
    primaryWhite: '#EDEDED',
    secondaryWhite: '#ffffffb3',
    primaryBlack: '#000000',
    secondaryBlack: '#000000b3',
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          m: 0,
          backgroundColor: '#EEEEEE',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, '
          + 'Cantarell, Fira Sans, Droid Sans, IBM Plex Sans Condensed, sans-serif',
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#2b2b2b',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
            border: '3px solid #2b2b2b',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#959595',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#959595',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#959595',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
        p: {
          color: '#EDEDED',
        },
        code: {
          fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
        },
      },
    },
  },
});

export default theme;

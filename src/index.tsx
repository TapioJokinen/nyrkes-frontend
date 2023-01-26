import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AuthProvider, AlertProvider } from './context';
import RouterProvider from './routes';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider>
        <AuthProvider>
          <RouterProvider />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

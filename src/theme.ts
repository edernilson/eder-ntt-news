import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          secondary: { main: '#9c27b0' },
          text: { primary: '#af0101', secondary: '#555' },
        }
      : {
          primary: { main: '#90caf9' },
          secondary: { main: '#ce93d8' },
          background: { default: '#121212', paper: '#1e1e1e' },
          text: { primary: '#f00', secondary: '#555'  },
        }),
  },
});

export const createAppTheme = (mode: 'light' | 'dark') =>
  createTheme(getDesignTokens(mode));
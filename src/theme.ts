import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          
          primary: { main: '#d32f2f' }, 
          secondary: { main: '#212121' }, 
          background: { 
            default: '#f5f5f5', 
            paper: '#ffffff',   
          },
          text: { 
            primary: '#1a1a1a',   
            secondary: '#666666', 
          },
          footer: { main: '#212121' }, 
        }
      : {
          primary: { main: '#ef5350' },
          secondary: { main: '#eeeeee' },
          background: { 
            default: '#121212', 
            paper: '#1e1e1e' 
          },
          text: { 
            primary: '#ffffff', 
            secondary: '#aaaaaa' 
          },
          footer: { main: '#212121' }, 
        }),
  },
});

export const createAppTheme = (mode: 'light' | 'dark') =>
  createTheme(getDesignTokens(mode));
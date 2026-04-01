'use client';

import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '@/ThemeRegistry';

export default function DarkModeToggle() {
  const { mode, toggleMode } = React.useContext(ColorModeContext);

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton color="inherit" onClick={toggleMode}>
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
}
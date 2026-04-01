'use client';

import { Button, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        🌗 Next.js + MUI with Dark Mode
      </Typography>
      <Button variant="contained" color="primary">
        Test Button
      </Button>
    </Container>
  );
}
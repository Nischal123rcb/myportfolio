import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home({ onExplore }) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="text.secondary">Welcome</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
          Hi, I'm Nischal
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
        Frontend Developer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
          I craft responsive, accessible, and performant web experiences with React and modern tooling.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }} onClick={onExplore}>Explore my work</Button>
      </Container>
    </Box>
  );
}


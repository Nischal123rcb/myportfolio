import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Contact({ onPhone, onEmail, onLinkedIn }) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Typography variant="overline" color="text.secondary">Contact</Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, mt: 1 }}>Let's work together</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
          Have a project or opportunity in mind? I’d love to hear from you.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center" sx={{ mt: 3 }}>
          <Button variant="contained" onClick={onEmail}>Email me</Button>
          <Button variant="outlined" onClick={onLinkedIn}>LinkedIn</Button>
        </Stack>
      </Container>
    </Box>
  );
}

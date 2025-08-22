import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function About({
  name = 'Nischal k',
  role = 'Frontend Developer',
  summary = `I design and build modern, performant web apps with a focus on delightful UX, accessibility, and clean, scalable code. I enjoy turning complex problems into simple, beautiful interfaces using React and the modern web platform.`,
  photoUrl = '',
  skills = [
    'React',
    'TypeScript',
    'JavaScript (ESNext)',
    'Material UI',
    'Tailwind',
    'Accessibility',
    'Testing',
    'Performance',
  ],
  onContact,
  onDownloadResume,
}) {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Avatar
                alt={name}
                src={photoUrl}
                sx={{ width: 144, height: 144, bgcolor: 'primary.main', fontSize: 48, fontWeight: 700 }}
              >
                {!photoUrl && name ? name.slice(0, 1) : null}
              </Avatar>
            </Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
              About
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              {role}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {summary}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" onClick={onContact} disableElevation>
                Contact Me
              </Button>
              <Button variant="outlined" color="primary" onClick={onDownloadResume}>
                Download Resume
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, sm: 6 } }} />

        <Box>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
            Skills
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" color="default" />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
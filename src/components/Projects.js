import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const demoProjects = [
  { id: 1, title: 'Portfolio Website', desc: 'React + MUI, responsive and accessible.' },
  { id: 2, title: 'Dashboard UI', desc: 'Charts, tables, and filters with React.' },
  { id: 3, title: 'Component Library', desc: 'Reusable components and theming.' },
];

export default function Projects({ projects = demoProjects }) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="text.secondary">Projects</Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5, mb: 3 }}>Selected Work</Typography>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{p.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{p.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

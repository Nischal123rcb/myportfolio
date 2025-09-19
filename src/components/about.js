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
  summary = `As a passionate Front-End Developer with a solid foundation in Computer Science, I bring hands-on experience in building responsive, user-centric web applications using React, HTML, CSS, and JavaScript. I specialize in crafting intuitive interfaces and deploying polished projects via GitHub, with recent work including a functional website clone and customized UI components using Material UI.
My approach is rooted in practical problem-solving and attention to detail, ensuring that every element contributes to a seamless user experience. I'm deeply curious about emerging technologies like AI and cloud computing, and I thrive in collaborative environments where I can contribute innovative solutions while continuously learning from experienced teams.
Driven by a desire to create meaningful digital experiences, I'm eager to join dynamic development teams where I can apply my technical skills, creativity, and growth mindset to deliver impactful front-end solutions.`,
  photoUrl = '',
  skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'Material UI',
    'GitHub',
    'Problem Solving',
    'UI/UX Design',
    'Cloud Computing',
  ],
  onViewResume,
  onDownloadResume,
}) {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 3, sm: 4, md: 5 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
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
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                  if (typeof onViewResume === 'function') {
                    onViewResume();
                  } else {
                    window.open('/resume.pdf', '_blank');
                  }
                }}
                disableElevation
              >
                View Resume
              </Button>
              <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
                <Button 
                  variant="outlined" 
                  color="primary"
                >
                  Download Resume
                </Button>
              </a>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, sm: 6 } }} />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Skills
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
            {skills.map((skill) => {
              // Map skill names to logo image filenames in public folder
              const logos = {
                'React': '/logo192.png',
                'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
                'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                'Problem Solving': 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
                'UI/UX Design': 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
                'Cloud Computing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
              };
              return (
                <Box
                  key={skill}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    boxShadow: '0 6px 20px 0 rgba(0,0,0,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.15)',
                    background: 'linear-gradient(135deg, #fff 60%, #e3e3e3 100%)',
                    transform: 'perspective(400px) rotateX(8deg)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'perspective(400px) rotateX(0deg) scale(1.07)',
                      boxShadow: '0 12px 32px 0 rgba(0,0,0,0.30), 0 2px 8px 0 rgba(0,0,0,0.18)',
                    },
                    mb: 1,
                  }}
                >
                  <Avatar
                    src={logos[skill]}
                    alt={skill}
                    sx={{ width: 32, height: 32, mr: 1, bgcolor: 'transparent' }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#222' }}>{skill}</Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 4, sm: 6 } }} />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Educational Qualifications
          </Typography>
          <Box sx={{ 
              mt: 3, 
              border: 1, 
              borderColor: 'divider', 
              borderRadius: 2,
              bgcolor: 'background.paper',
              overflowX: 'auto',
              overflowY: 'hidden',
              maxWidth: '100%',
              '&:hover': { boxShadow: 2, transition: 'box-shadow 0.3s ease' }
            }}>
              <Box
                component="table"
                sx={{
                  minWidth: 500,
                  width: '100%',
                  borderCollapse: 'collapse',
                  '& th, & td': {
                    border: '1px solid',
                    borderColor: 'divider',
                    padding: 2,
                    textAlign: 'left',
                    verticalAlign: 'top'
                  },
                  '& th': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem'
                  },
                  '& tr:nth-of-type(even)': {
                    bgcolor: 'action.hover'
                  },
                  '& tr:hover': {
                    bgcolor: 'action.selected'
                  },
                  '& strong': {
                    color: 'primary.main',
                    fontWeight: 700
                  }
                }}
              >
              <Box component="thead">
                <Box component="tr">
                  <Box component="th" sx={{ width: '25%' }}>Qualification</Box>
                  <Box component="th" sx={{ width: '40%' }}>Institution Name</Box>
                  <Box component="th" sx={{ width: '15%' }}>Duration</Box>
                  <Box component="th" sx={{ width: '20%' }}>Percentage / CGPA</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td">
                    <strong>Diploma in Computer Science</strong>
                  </Box>
                  <Box component="td">
                    Sri Dharmasthala Manjunatheshwara Polytechnic<br />
                    <Typography variant="caption" color="text.secondary">
                      SDM Institute of Technology (SDMIT), Ujire
                    </Typography>
                  </Box>
                  <Box component="td">2023 – Present</Box>
                  <Box component="td">
                    <Chip 
                      label="64.70 / 7.22" 
                      color="primary" 
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600, minWidth: 64, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    />
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td">
                    <strong>SSLC</strong>
                  </Box>
                  <Box component="td">
                    Smt Indira Gandhi Residential School<br />
                    <Typography variant="caption" color="text.secondary">
                      Muguru, T. Narasipura Taluk, Mysuru District – 571124
                    </Typography>
                  </Box>
                  <Box component="td">2023</Box>
                  <Box component="td">
                    <Chip 
                      label="73.92%" 
                      color="primary" 
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600, minWidth: 64, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
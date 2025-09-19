import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built with React and Material UI.',
    image: '/Screenshot 2025-09-17 192629.png',
    link: 'https://nischal-seven.vercel.app',
  },
  {
    title: 'SDM Website Clone',
    description: 'Functional clone of SDM Polytechnic site with clean layout and responsive design.',
    image: '/Screenshot 2025-09-17 192705.png',  // Using existing image from public folder
    link: 'https://collagewebsitclon.vercel.app',
    
  },
  
];

export default function Projects() {
  return (
    <Box component="section" sx={{
      py: 4,
      backgroundColor: '#f9f9f9',
      mx: 0,
      mt: 0,
    }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, textAlign: 'center' }}>
        Projects
      </Typography>

      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation
        coverflowEffect={{
          rotate: -20,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        style={{ paddingBottom: '40px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} style={{ width: '240px' }}>
            <Card>
              <CardMedia
                component="img"
                height="120"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ px: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                sx={{ mx: 1, mb: 1 }}
              >
                View
              </Button>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
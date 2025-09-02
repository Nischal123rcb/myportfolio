import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from './components/Drawer';
import About from './components/about';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectSDM from './components/ProjectSDM';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(`[data-section="${sections[i]}"]`);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      {/* Mobile Top Navigation Bar */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            bgcolor: 'white',
            boxShadow: 2,
            zIndex: 1300,
          }}
        >
          {/* Profile Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/IMG_20250323_232827.jpg"// Replace with actual image path
              alt="Profile"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
                mr: 1,
              }}
            />
            <Box>
              <Box sx={{ fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>Nischal k</Box>
              <Box sx={{ fontWeight: 'bold', fontSize: '0.75rem', lineHeight: 1, mt: 0.5 }}>Full Stack Developer</Box>
            </Box>

          </Box>

          {/* Hamburger Icon */}
          <IconButton onClick={handleDrawerToggle} color="primary">
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Mobile Backdrop */}
      {isMobile && mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1100,
          }}
          onClick={handleDrawerToggle}
        />
      )}

      {/* Drawer */}
      <Drawer
        onSelect={(id) => scrollToSection(id)}
        activeSection={activeSection}
        profile={{ name: 'Nischal k', role: 'Full Stack Developer', avatarUrl: '/profile.jpg' }}
        width={320}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          marginLeft: isMobile ? 0 : '320px',
          paddingTop: isMobile ? 64 : 0,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div data-section="home">
          <Home />
        </div>

        <div data-section="about">
          <About
            name="Nischal k"
            role="Frontend Developer"
            onContact={() => scrollToSection('contact')}
            onDownloadResume={() => console.log('Download resume clicked')}
          />
        </div>

        <div data-section="projects">
          <Projects />
          <ProjectSDM />
        </div>

        <div data-section="contact">
          <Contact
            onPhone={() => (window.location.href = 'tel:+91 9986919988')}
            onEmail={() => (window.location.href = 'mailto:nischalk762@gmail.com')}
            onLinkedIn={() =>
              window.open('https://www.linkedin.com/in/nischal-k-122899374', '_blank', 'noopener,noreferrer')
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
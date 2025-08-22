import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from './components/Drawer';
import About from './components/about';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/portfolio';

function App() {
  const [open, setOpen] = React.useState(false);
  const [section, setSection] = React.useState('home');

  return (
    <div className="App">
      <IconButton onClick={() => setOpen(true)} aria-label="open drawer">
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(id) => setSection(id)}
        profile={{ name: 'Nischal k', role: 'Frontend Developer', avatarUrl: '' }}
        width={320}
      />

      {section === 'home' && (
        <Home onExplore={() => setSection('projects')} />
      )}

      {section === 'about' && (
        <About
          name="Nischal k"
          role="Frontend Developer"
          onContact={() => setSection('contact')}
          onDownloadResume={() => console.log('Download resume clicked')}
        />
      )}

      {section === 'projects' && (
        <>
          <Projects />
          <Portfolio />
        </>
      )}

      {section === 'contact' && (
        <Contact
          onPhone={() => (window.location.href = 'tel:+1234567890')}
          onEmail={() => (window.location.href = 'mailto:you@example.com')}
          onLinkedIn={() => window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer')}
        />
      )}
    </div>
  );
}

export default App;
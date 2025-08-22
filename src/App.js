import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from './components/Drawer';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <IconButton onClick={() => setOpen(true)} aria-label="open drawer">
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(id) => console.log('Selected:', id)}
        profile={{ name: 'Nischal k', role: 'Frontend Developer', avatarUrl: '' }}
        width={320}
      />
    </div>
  );
}

export default App;
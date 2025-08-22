
import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';export default function Drawer({
  open,
  onClose,
  onSelect,
  width = 300,
  profile = {
    name: 'Nischal k',
    role: 'Frontend Developer',
    avatarUrl: '',
  },
  links = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: null },
    { id: 'projects', label: 'Projects', icon: null },
    { id: 'contact', label: 'Contact', icon: null },
  ],
  socials = [
    { id: 'github', icon: <GitHubIcon />, href: '#' },
    { id: 'linkedin', icon: <LinkedInIcon />, href: '#' },
    { id: 'email', icon: <MailOutlineIcon />, href: 'mailto:you@example.com' },
  ],
  palette = {
    headerBg: 'transparent',
    headerText: 'inherit',
    itemActiveBg: 'action.selected',
    itemText: 'text.primary',
    itemIcon: 'text.secondary',
    divider: 'divider',
    footerText: 'text.secondary',
  },
}) {
  const handleSelect = (id) => () => {
    onSelect && onSelect(id);
    onClose && onClose();
  };

  return (
    <MuiDrawer anchor="left" open={open} onClose={onClose} PaperProps={{ sx: { width } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 2,
            py: 2.5,
            bgcolor: palette.headerBg,
            color: palette.headerText,
          }}
        >
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            sx={{ width: 56, height: 56, bgcolor: 'primary.main', fontWeight: 600 }}
          >
            {(!profile.avatarUrl && profile.name) ? profile.name.slice(0, 1) : null}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700 }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" noWrap color="text.secondary">
              {profile.role}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: palette.divider }} />

        {/* Navigation */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <List sx={{ py: 0 }}>
            {links.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={handleSelect(item.id)}>
                  {item.icon ? (
                    <ListItemIcon sx={{ color: palette.itemIcon }}>{item.icon}</ListItemIcon>
                  ) : null}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: { color: palette.itemText, fontWeight: 500 } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ borderColor: palette.divider }} />

        {/* Footer / Socials */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.5 }}>
          <Typography variant="caption" color={palette.footerText}>
            © {new Date().getFullYear()} {profile.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socials.map((s) => (
              <IconButton
                key={s.id}
                size="small"
                color="inherit"
                component="a"
                href={s.href}
                target={s.href?.startsWith('http') ? '_blank' : undefined}
                rel={s.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.id}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </MuiDrawer>
  );
}
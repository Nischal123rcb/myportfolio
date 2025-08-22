import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact({ onPhone, onEmail, onLinkedIn }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 }, position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e', mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Contact me for any queries or you can write us, we will get back to you in 48 hours.
          </Typography>
        </Box>

        {/* Two Column Layout */}
        <Grid container spacing={4} sx={{ minHeight: '70vh' }}>
          {/* Left Column - Contact Information */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2.5} sx={{ flex: 1 }}>
                  {/* Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <LocationOnIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Location:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Hirikyathahanahalli post, Gavvadagere Hobil, Hunsur Taluk, Mysore-571134
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <EmailIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Email:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        nischalk762@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <PhoneIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Call:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +91 9986919988
                      </Typography>
                    </Box>
                  </Box>

                  {/* WhatsApp */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <WhatsAppIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        WhatsApp:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Button 
                          variant="text" 
                          sx={{ p: 0, minWidth: 'auto', textTransform: 'none' }}
                          onClick={() => window.open('https://wa.me/919986919988', '_blank')}
                        >
                          click here
                        </Button>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Embedded Google Maps */}
                  <Box sx={{ 
                    flex: 1,
                    borderRadius: 1,
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0',
                    minHeight: 250,
                    mt: 2
                  }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d76.2839173!3d12.394181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIzJzM5LjEiTiA3NsKwMTcnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map - Ujire, Karnataka"
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2.5} sx={{ flex: 1, justifyContent: 'space-between' }}>
                  <Box>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      size="medium"
                      sx={{ mb: 1.5 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      size="medium"
                      type="email"
                      sx={{ mb: 1.5 }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      size="medium"
                      sx={{ mb: 1.5 }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      size="medium"
                      multiline
                      rows={5}
                      sx={{ mb: 1.5 }}
                    />
                  </Box>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={onEmail}
                    sx={{ 
                      bgcolor: '#42a5f5',
                      '&:hover': { bgcolor: '#1976d2' }
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll to Top Button */}
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: '#42a5f5'
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

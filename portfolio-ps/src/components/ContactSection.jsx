import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export function ContactSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const contactItems = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'popa.stefan.pro@gmail.com',
      href: 'mailto:popa.stefan.pro@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+32 486 06 50 45',
      href: 'tel:+32 486 06 50 45',
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Soignies, Belgium',
      href: null,
    },
    {
      icon: DirectionsCarIcon,
      label: 'Mobility',
      value: 'Driver\'s License + Vehicle',
      href: null,
    },
  ]

  return (
    <Box
      id="contact"
      sx={{
        paddingY: 8,
        background: isDark ? '#121212' : '#ffffff',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              marginBottom: 2,
              color: isDark ? '#ffffff' : '#000000',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.75rem' },
            }}
          >
            Let’s Work Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#b0b0b0' : '#666666',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            I’m open to opportunities in industrial computing, automation, and software development. Let’s connect and explore how we can collaborate.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
          {contactItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  component={item.href ? 'a' : 'div'}
                  href={item.href}
                  sx={{
                    padding: 2,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    textDecoration: 'none',
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease',
                    cursor: item.href ? 'pointer' : 'default',
                    '&:hover': item.href ? {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    } : {},
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                      borderRadius: 1,
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent
                      sx={{
                        color: isDark ? '#ffffff' : '#000000',
                        fontSize: '1.25rem',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#b0b0b0' : '#666666',
                        marginBottom: 0.5,
                        fontWeight: 500,
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: isDark ? '#ffffff' : '#000000',
                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            )
          })}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            href="mailto:popa.stefan.pro@gmail.com"
            sx={{
              backgroundColor: isDark ? '#ffffff' : '#000000',
              color: isDark ? '#000000' : '#ffffff',
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: isDark ? '#e0e0e0' : '#1a1a1a',
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Social Links */}
        <Box sx={{ textAlign: 'center', marginTop: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: isDark ? '#b0b0b0' : '#666666',
              marginBottom: 2,
              fontWeight: 500,
            }}
          >
            Connect with me on social media
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{
                borderColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#ffffff' : '#000000',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon />}
              sx={{
                borderColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#ffffff' : '#000000',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

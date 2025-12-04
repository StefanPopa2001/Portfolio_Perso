import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function HeroSection({ onScrollToSection }) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >

      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Profile Image Circle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}images/topphoto.png`}
              alt="Stefan Popa"
              sx={{
                width: { xs: '200px', sm: '240px', md: '280px' },
                height: { xs: '200px', sm: '240px', md: '280px' },
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${isDark ? '#ffffff' : '#000000'}`,
                filter: isDark ? 'grayscale(100%)' : 'grayscale(0%)',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: isDark ? 'grayscale(80%)' : 'grayscale(0%)',
                },
              }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              marginBottom: 2,
              color: isDark ? '#ffffff' : '#000000',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            IT & OT
            <br />
            <Box component="span" sx={{ }}>
              Full‑Stack Developer
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              color: isDark ? '#b0b0b0' : '#666666',
              fontWeight: 300,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Software developer and industrial computing student with freelance full-stack developeement and 4.0 industry solutions experience.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              onClick={() => onScrollToSection('contact')}
              sx={{
                backgroundColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#000000' : '#ffffff',
                padding: { xs: '10px 24px', sm: '12px 32px' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: isDark ? '#e0e0e0' : '#1a1a1a',
                },
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              onClick={() => onScrollToSection('experience')}
              sx={{
                borderColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#ffffff' : '#000000',
                padding: { xs: '10px 24px', sm: '12px 32px' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              View Work
            </Button>
          </Box>

         
        </Box>
      </Container>
    </Box>
  )
}

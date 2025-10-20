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
        background: isDark
          ? 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        paddingTop: '64px',
        paddingBottom: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background effect */}
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: '10%',
          left: '5%',
          '@media (max-width: 600px)': {
            width: '200px',
            height: '200px',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          bottom: '10%',
          right: '5%',
          '@media (max-width: 600px)': {
            width: '200px',
            height: '200px',
          },
        }}
      />

      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
            Software developer and industrial computing student seeking a thesis internship. I also work as a freelance developer, building applications that streamline work for people and organizations.
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

          {/* Stats */}
          <Grid container spacing={2} sx={{ maxWidth: '100%', justifyContent: 'center' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  padding: 2,
                  textAlign: 'center',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                  }}
                >
                  4+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                >
                  Years of experience
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  padding: 2,
                  textAlign: 'center',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                  }}
                >
                  3+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                >
                  Years of freelancing
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  padding: 2,
                  textAlign: 'center',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                  }}
                >
                  6
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                >
                  Years of study
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

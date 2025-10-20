import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import portfolioData from '../data/portfolioData.json'

const flagMap = {
  FR: '🇫🇷',
  RO: '🇷🇴',
  GB: '🇬🇧',
  NL: '🇳🇱',
}

export function AboutSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="about"
      sx={{
        paddingY: 8,
        background: isDark ? '#121212' : '#ffffff',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
          }}
        >
          About
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 6 }}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                marginBottom: 2,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              {portfolioData.personal.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              {portfolioData.personal.fullDescription}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              color: isDark ? '#ffffff' : '#000000',
              textAlign: 'center',
            }}
          >
            Languages
          </Typography>

          {portfolioData.languages.map((lang) => (
            <Box key={lang.name} sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    {flagMap[lang.flagCode] || '🏳️'}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#d0d0d0' : '#333333',
                      fontWeight: 500,
                    }}
                  >
                    {lang.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#808080' : '#999999',
                  }}
                >
                  {lang.level}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={lang.proficiency}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: isDark ? '#ffffff' : '#000000',
                    borderRadius: 4,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import portfolioData from '../data/portfolioData.json'

export function AchievementsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        paddingY: 8,
        background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
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
          Achievements
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {portfolioData.achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Photo Card - Square */}
                <Paper
                  elevation={0}
                  sx={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    marginBottom: 2,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {achievement.photo && (
                    <Box
                      component="img"
                      src={achievement.photo}
                      alt={achievement.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Paper>

                {/* Achievement Info */}
                <Paper
                  elevation={0}
                  sx={{
                    padding: 2,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                      }}
                    >
                      {achievement.icon}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#b0b0b0' : '#666666',
                        fontWeight: 600,
                      }}
                    >
                      {achievement.year}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: isDark ? '#ffffff' : '#000000',
                      marginBottom: 1,
                      fontSize: '0.95rem',
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#d0d0d0' : '#333333',
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

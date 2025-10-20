import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
          About Me
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
                textAlign: 'justify',
              }}
            >
              I’m Stefan Popa, a 24‑year‑old software developer. I was born in Romania and have live in Belgium since the age of seven. I grew up around the early‑2000s era of computers, and very early on I started exploring the realms of Windows 95 and XP.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              I began studying computer science at Saint‑Vincent Soignies in my third year of high school. For higher education, I chose Management Computing at HELHa Mons to prepare for a career in IT. This path offered both in‑depth software development and practical exposure to entrepreneurship and project management.
            </Typography>


              <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >

              Early on, I assumed I would start a full‑time job immediately after graduating. However, through hackathons, internships, and networking, I realized I wanted to work beyond pure software—to integrate devices and make them easy to control through modern web interfaces. That’s why I began a second bachelor’s in Industrial Computing, focusing on telecommunications, electronics, and applying them with user‑friendly technologies such as React.
            </Typography>


              <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              Now, as I enter my final year in Industrial Computing in Charleroi, I’m seeking an internship to support my end‑of‑studies thesis. I’m interested in roles across industrial computing, automation, and full‑stack development—ideally at the intersection of all three.
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

          <Box sx={{ marginBottom: 3 }}>
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
                  🇫🇷
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    fontWeight: 500,
                  }}
                >
                  French
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#808080' : '#999999',
                }}
              >
                Native
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={100}
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
          <Box sx={{ marginBottom: 3 }}>
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
                  🇷🇴
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    fontWeight: 500,
                  }}
                >
                  Romanian
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#808080' : '#999999',
                }}
              >
                Native
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={100}
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
          <Box sx={{ marginBottom: 3 }}>
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
                  🇬🇧
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    fontWeight: 500,
                  }}
                >
                  English
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#808080' : '#999999',
                }}
              >
                Professional (C1)
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={85}
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
          <Box sx={{ marginBottom: 3 }}>
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
                  🇳🇱
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    fontWeight: 500,
                  }}
                >
                  Dutch
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#808080' : '#999999',
                }}
              >
                Basic (A1)
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={25}
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
        </Box>
      </Container>
    </Box>
  )
}

import { Box, Container, Typography, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import portfolioData from '../data/portfolioData.json'

const tagColorMap = {
  green: { bg: '#10b981', text: '#ecfdf5' },
  blue: { bg: '#3b82f6', text: '#eff6ff' },
  purple: { bg: '#a855f7', text: '#faf5ff' },
}

export function ExperienceSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="experience"
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
          Experience
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {portfolioData.experience.map((job, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                padding: { xs: 2, sm: 3 },
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2, flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: isDark ? '#ffffff' : '#000000',
                      marginBottom: 0.5,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#b0b0b0' : '#666666',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {job.company}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                  <Chip
                    label={job.tag}
                    size="small"
                    sx={{
                      backgroundColor: tagColorMap[job.tagColor]?.bg || '#3b82f6',
                      color: tagColorMap[job.tagColor]?.text || '#eff6ff',
                      fontWeight: 600,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#808080' : '#999999',
                      fontSize: '0.8rem',
                    }}
                  >
                    {job.period}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                {job.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

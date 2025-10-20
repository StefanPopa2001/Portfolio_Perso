import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import portfolioData from '../data/portfolioData.json'

export function SkillsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const skillCategories = [
    { title: 'Industrial Computing', skills: portfolioData.skills.industrial },
    { title: 'Programming & Frameworks', skills: portfolioData.skills.programming },
    { title: 'Databases & Infrastructure', skills: portfolioData.skills.infrastructure },
    { title: 'Project Management', skills: portfolioData.skills.management },
    { title: 'Professional Skills', skills: portfolioData.skills.professional, isProfessional: true },
  ]

  return (
    <Box
      id="skills"
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                    color: isDark ? '#ffffff' : '#000000',
                    textAlign: 'center',
                  }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: category.isProfessional
                          ? isDark ? '#ffffff' : '#000000'
                          : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        color: category.isProfessional
                          ? isDark ? '#000000' : '#ffffff'
                          : isDark ? '#ffffff' : '#000000',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: category.isProfessional
                            ? isDark ? '#e0e0e0' : '#1a1a1a'
                            : isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Education Section - Vertical Display with Photos */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 4,
              color: isDark ? '#ffffff' : '#000000',
              textAlign: 'center',
            }}
          >
            Education
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '600px', margin: '0 auto' }}>
            {portfolioData.education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                {/* Photo Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: { xs: '100%', sm: '150px' },
                    height: '150px',
                    minWidth: { xs: 'auto', sm: '150px' },
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {edu.photo && (
                    <Box
                      component="img"
                      src={edu.photo}
                      alt={edu.degree}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Paper>

                {/* Education Info */}
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1, flexWrap: 'wrap', gap: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: isDark ? '#ffffff' : '#000000',
                      }}
                    >
                      {edu.degree}
                    </Typography>
                    <Chip
                      label={edu.status}
                      size="small"
                      sx={{
                        backgroundColor: edu.status === 'Current'
                          ? isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'
                          : isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                        color: edu.status === 'Current'
                          ? isDark ? '#10b981' : '#059669'
                          : isDark ? '#3b82f6' : '#1e40af',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#b0b0b0' : '#666666',
                      marginBottom: 0.5,
                    }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#808080' : '#999999',
                      fontSize: '0.85rem',
                    }}
                  >
                    {edu.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

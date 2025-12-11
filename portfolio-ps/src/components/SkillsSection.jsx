import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FR, RO, GB, NL } from 'country-flag-icons/react/3x2'

export function SkillsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const skills = {
    industrial: [
      "Siemens PLC programming",
      "Schneider Electric PLC programming",
      "HMI/SCADA development",
      "Microcontrollers",
      "IoT",
      "Embedded systems",
      "Telecommunications",
      "Industrial networks",
      "Automation",
      "PID control regulation"
    ],
    programming: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "TDD",
      "OOP",
      "C",
      "C#",
      "C++",
      "React",
      "Node.js",
      "Express",
      "Kotlin",
      "Angular",
      "Basic",
      ".NET",
      "Pascal",
      "PHP",


      
    ],
    infrastructure: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Azure",
      "Linux",
      "Windows Server",
      "Proxmox",
      "Traefik",
      "Node-RED",
      "Entity Framework",
      "Prisma"
    ],
    management: [
      "Git",
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Trello",
      "Notion",
      "Pert",
      "Gantt"

    ],
    professional: [
      "Adaptability",
      "Communication",
      "Teamwork",
      "Patience",
      "Entrepreneurship",
      "Creativity"
    ]
  }

  const skillCategories = [
    { title: 'Industrial computing', skills: skills.industrial },
    { title: 'Programming & frameworks', skills: skills.programming },
    { title: 'Databases & infrastructure', skills: skills.infrastructure },
    { title: 'Project management', skills: skills.management },
    { title: 'Soft skills', skills: skills.professional, isProfessional: true },
  ]

  const languages = [
    { name: 'French', flag: FR, level: 'Native', value: 100 },
    { name: 'Romanian', flag: RO, level: 'Native', value: 100 },
    { name: 'English', flag: GB, level: 'Professional (C1)', value: 85 },
    { name: 'Dutch', flag: NL, level: 'Basic (A1)', value: 25 },
  ]

  return (
    <Box
      id="skills"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="md" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
          }}
        >
          Soft & hard skills
        </Typography>

        <Typography variant="h6"
          sx={{
            fontWeight: 200,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          }}>
          Overview of my technical skills and soft skills. Levels of proficiency vary, please consult the project section to see my most proficient skills.
        </Typography>

  <Grid container spacing={4} sx={{ marginBottom: 8, alignItems: 'stretch', justifyContent: 'center' }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', height: '100%', padding: { xs: 1, sm: 2 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                    color: isDark ? '#ffffff' : '#000000',
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 1.5 }, justifyContent: 'center' }}>
                  {category.skills
                    .slice() // don't mutate original
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                    .map((skill) => (
                    <Paper
                      key={skill}
                      sx={{
                        padding: { xs: '6px 10px', sm: '8px 12px' },
                        backgroundColor: category.isProfessional
                          ? isDark ? '#ffffff' : '#000000'
                          : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        color: category.isProfessional
                          ? isDark ? '#000000' : '#ffffff'
                          : isDark ? '#ffffff' : '#000000',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                        borderRadius: '4px',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: category.isProfessional
                            ? isDark ? '#e0e0e0' : '#1a1a1a'
                            : isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
                        },
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                        {skill}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: '100%', width: '100%', margin: '0 auto', marginTop: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              color: isDark ? '#ffffff' : '#000000',
              textAlign: 'center',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            }}
          >
            Languages
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'stretch', width: '100%' }}>
            {languages.map((lang, index) => (
              <Box key={index} sx={{ display: 'flex', width: '100%' }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: 3,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 120,
                    width: '100%',
                    '&:hover': {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      marginBottom: 2,
                      flex: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 32, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <lang.flag title={lang.name} style={{ width: '100%', height: '100%', borderRadius: 2 }} />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: isDark ? '#d0d0d0' : '#333333',
                          fontWeight: 600,
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
                    value={lang.value}
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
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

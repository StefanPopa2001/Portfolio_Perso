import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function SkillsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const skills = {
    industrial: [
      "Siemens PLC Programming",
      "Schneider Electric PLC Programming",
      "HMI/SCADA Development",
      "Microcontrollers",
      "IoT",
      "Embedded Systems",
      "Telecommunications",
      "Industrial Networks",
      "Automation",
      "PID Control regulation"
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
    { title: 'Industrial Computing', skills: skills.industrial },
    { title: 'Programming & Frameworks', skills: skills.programming },
    { title: 'Databases & Infrastructure', skills: skills.infrastructure },
    { title: 'Project Management', skills: skills.management },
    { title: 'Soft Skills', skills: skills.professional, isProfessional: true },
  ]

  const languages = [
    { name: 'French', flag: '🇫🇷', level: 'Native', value: 100 },
    { name: 'Romanian', flag: '🇷🇴', level: 'Native', value: 100 },
    { name: 'English', flag: '🇬🇧', level: 'Professional (C1)', value: 85 },
    { name: 'Dutch', flag: '🇳🇱', level: 'Basic (A1)', value: 25 },
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
          Soft and Hard Skills
        </Typography>

  <Grid container spacing={4} sx={{ marginBottom: 8, alignItems: 'stretch', justifyContent: 'center' }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', height: '100%', padding: 2 }}>
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
                  {category.skills
                    .slice() // don't mutate original
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                    .map((skill) => (
                    <Paper
                      key={skill}
                      sx={{
                        padding: '8px 12px',
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
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {skill}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: '800px', margin: '0 auto', marginTop: 4 }}>
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

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 3, alignItems: 'stretch' }}>
            {languages.map((lang, index) => (
              <Box key={index} sx={{ display: 'flex' }}>
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
                    minWidth: 230,
                    width: 350,
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
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                        }}
                      >
                        {lang.flag}
                      </Typography>
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

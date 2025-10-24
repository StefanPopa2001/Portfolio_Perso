import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
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
      "Problem-Solving",
      "Teamwork",
      "Patience",
      "Critical Thinking",
      "Creativity"
    ]
  }

  const education = [
    {
      "degree": "Bachelor in Industrial Computing (System and networks)",
      "school": "Haute École Louvain en Hainaut",
      "status": "Current",
      "date": "2023 - 2026",
      "photo": "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/sp_16_9_864w/2022/05/24/node_464111/51966003/public/2022/05/24/B9731017942Z.1_20220524170128_000%2BGAEKIM26N.1-0.jpg?itok=FtO8pV_k1653405256",
      "description": "Electronics and automation, with an emphasis on networks and cybersecurity to brindge the OT and IT."
    },
    {
      "degree": "Bachelor in Management Computing (Application developement)",
      "school": "Haute École Louvain en Hainaut",
      "status": "Graduated",
      "date": "2020 - 2023 - Upper Class Honors",
      "photo": "/helha_mons.jpg",
      "description": "Software development and architecture with business-oriented problem solving."
    }
  ]

  const skillCategories = [
    { title: 'Industrial Computing', skills: skills.industrial },
    { title: 'Programming & Frameworks', skills: skills.programming },
    { title: 'Databases & Infrastructure', skills: skills.infrastructure },
    { title: 'Project Management', skills: skills.management },
    { title: 'Soft Skills', skills: skills.professional, isProfessional: true },
  ]

  return (
    <Box
      id="skills"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        background: isDark ? '#121212' : '#ffffff',
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '840px', margin: '0 auto' }}>
            {education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'stretch',
                  justifyContent: 'center',
                }}
              >
                {/* Photo Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: { xs: '100%', sm: '160px' },
                    height: { xs: '200px', sm: '160px' },
                    minWidth: { xs: 'auto', sm: '160px' },
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
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 'auto', sm: '160px' } }}>
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
                  {edu.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#d0d0d0' : '#333333',
                        marginTop: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {edu.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

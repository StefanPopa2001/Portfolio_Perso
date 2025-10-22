import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function SkillsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const skills = {
    industrial: [
      "PLC Programming",
      "SCADA Systems",
      "Industrial Networks",
      "Automation",
      "IoT",
      "Embedded Systems"
    ],
    programming: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "React",
      "Node.js",
      "Express",
      "Django",
      "Spring Boot"
    ],
    infrastructure: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Azure",
      "Linux",
      "Windows Server"
    ],
    management: [
      "Git/GitLab",
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Trello",
      "Notion"
    ],
    professional: [
      "Problem Solving",
      "Team Collaboration",
      "Technical Communication",
      "Adaptability",
      "Project Leadership"
    ]
  }

  const education = [
    {
      "degree": "Bachelor in Industrial Computing (System and networks)",
      "school": "Haute École Louvain en Hainaut",
      "status": "Current",
      "date": "2023 - 2026",
      "photo": "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/sp_16_9_864w/2022/05/24/node_464111/51966003/public/2022/05/24/B9731017942Z.1_20220524170128_000%2BGAEKIM26N.1-0.jpg?itok=FtO8pV_k1653405256",
      "description": "Focus on Industrial IT with emphasis on automation, control systems, and secure networking. Coursework and labs include PLC programming (Siemens/TIA Portal), SCADA/HMI design, industrial protocols (Modbus/TCP, Profinet), embedded systems, and IIoT. Building strong foundations in system architecture, cybersecurity for OT, and high-availability infrastructure for plant operations."
    },
    {
      "degree": "Bachelor in Management Computing (Application developement)",
      "school": "Haute École Louvain en Hainaut",
      "status": "Graduated",
      "date": "2020 - 2023 - Upper Class Honors",
      "photo": "/helha_mons.jpg",
      "description": "Combined software engineering fundamentals with business-oriented problem solving. Completed projects in full‑stack web development, databases, and data analysis, with a strong focus on delivering measurable value to stakeholders. Developed an analytical mindset for translating operational needs into robust, maintainable software solutions."
    }
  ]

  const skillCategories = [
    { title: 'Industrial Computing', skills: skills.industrial },
    { title: 'Programming & Frameworks', skills: skills.programming },
    { title: 'Databases & Infrastructure', skills: skills.infrastructure },
    { title: 'Project Management', skills: skills.management },
    { title: 'Professional Skills', skills: skills.professional, isProfessional: true },
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

        <Grid container spacing={4} sx={{ marginBottom: 8, alignItems: 'stretch' }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 2 }}>
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

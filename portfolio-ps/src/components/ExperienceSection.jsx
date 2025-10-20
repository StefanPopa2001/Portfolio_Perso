import { Box, Container, Typography, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
          <Paper
            key={0}
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
                  System Administrator & Webmaster
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  Code it Bryan!
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                <Chip
                  label="Current"
                  size="small"
                  sx={{
                    backgroundColor: '#10b981',
                    color: '#ecfdf5',
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
                  November 2023 - Present
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'justify',
              }}
            >
              On my own initiative, I proposed a CRM‑like solution to the leadership of Code it Bryan!—the ASBL behind Logiscool Mons—to manage student attendance, monthly payments, teacher replacement tracking, centralized student contact and financial information, and mailing.
              Before this, most tasks were handled manually in spreadsheets—or not at all—leading to recurring errors. As the second‑largest Logiscool branch in Belgium, with roughly 200 students and 50 staff members, the need for a robust system was critical.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontStyle: 'italic',
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: By 2025, LMI v2 (Logiscool Mons Intranet) fully handled attendance and its intricacies. The automated system suggested equivalent make‑up lessons for absent students, protecting learning continuity. It was used about 160 times—roughly 10% of total lessons. The platform also centralized communication, documentation, contacts, and financial status tracking for management. The system remains in use and is being upgraded to LMI v3, containerized with Docker and rebuilt with React and Express.js to expand capabilities and improve responsiveness and UI.
            </Typography>
          </Paper>
          <Paper
            key={1}
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
                  Computer Science Teacher
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  Logiscool Mons
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                <Chip
                  label="Current"
                  size="small"
                  sx={{
                    backgroundColor: '#10b981',
                    color: '#ecfdf5',
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
                  November 2021 - Present
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'justify',
              }}
            >
              In my second year at HELHa Mons, I began working part‑time as a teacher at Logiscool Mons, a private school where students of all ages learn computer science, programming, and AI.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontStyle: 'italic',
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: At the end of last year, one of my students brought me a box of chocolates.
            </Typography>
          </Paper>
          <Paper
            key={2}
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
                  R&D Software Development Intern
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  Aproove
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                <Chip
                  label="Internship"
                  size="small"
                  sx={{
                    backgroundColor: '#a855f7',
                    color: '#faf5ff',
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
                  February 2023 - June 2023
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'justify',
              }}
            >
              During my final year at HELHa Mons, for my end‑of‑studies thesis, I joined the R&D team at Aproove for a 15‑week internship. The project aimed to develop a state‑of‑the‑art solution to integrate the Aproove proofing and versioning system into the Adobe application environment.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontStyle: 'italic',
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: Delivered a working Adobe plugin enabling real‑time exchange of geometric data. I completed the entire scope of work ahead of schedule and kicked off a second project: a prototype for in‑browser proofing of 3D files using the existing Aproove API. The prototype was successful and approved by the CEO for further integration into the Aproove suite.
            </Typography>
          </Paper>
          <Paper
            key={3}
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
                  Software development internship
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  AGC Moustier
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                <Chip
                  label="Internship"
                  size="small"
                  sx={{
                    backgroundColor: '#a855f7',
                    color: '#faf5ff',
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
                  June 2022 - July 2022
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'justify',
              }}
            >
              Summer student job supporting the plant’s commercial office. Streamlined SAP dashboards that had become bloated to Power BI. Worked with the IT team of AGC Belgium to expand software capabilities of their framework.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontStyle: 'italic',
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: Delivered dashboards adopted by management, leading to improved decision‑making and operational insights across facilities.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

import { Box, Container, Typography, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function ExperienceSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="experience"
      sx={{
        paddingY: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 2,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          }}
        >
          Experience
        </Typography>

        <Typography variant="h6"
          sx={{
            fontWeight: 200,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          }}>

          Summary of my professional experience:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Paper
            key={0}
            elevation={0}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, marginBottom: 2, gap: { xs: 1, sm: 2 } }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 0.5,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  }}
                >
                  System Administrator & Webmaster
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                  }}
                >
                  Code it Bryan!
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 1 }}>
                <Chip
                  label="Current (part time)"
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
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
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
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                textAlign: 'justify',
              }}
            >
              On my own initiative, I suggested developing a CRM solution to the leadership of "Code it Bryan!", the ASBL behind Logiscool Mons.
              The goal was to automate manual tasks previously completed with Excel sheets, leading to frequent versioning issues.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: By 2025, the solution fully manages databases, invoicing, statistical tracking, attendance, and automatic mailing. In the second half of 2024, the system enabled students to attend a missed class more than 160 times. Furthermore, it allowed all the invoicing to be calculated automatically, and an automatic mailing system updated the personnel on important events.
            </Typography>
          </Paper>
          <Paper
            key={1}
            elevation={0}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, marginBottom: 2, gap: { xs: 1, sm: 2 } }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 0.5,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  }}
                >
                  Computer Science Teacher
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                  }}
                >
                  Logiscool Mons
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 1 }}>
                <Chip
                  label="Current (part time)"
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
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
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
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                textAlign: 'justify',
              }}
            >
              I am employed as a titular computer science teacher at Logiscool Mons, a coding school for teenagers where I teach programming in Python, JavaScript, C# (Unity), and AI concepts and tools.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: At the end of 2025, my students brought me chocolate.
            </Typography>
          </Paper>
          <Paper
            key={2}
            elevation={0}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, marginBottom: 2, gap: { xs: 1, sm: 2 } }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 0.5,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  }}
                >
                  R&D Software Development Intern
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                  }}
                >
                  Aproove
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 1 }}>
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
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
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
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                textAlign: 'justify',
              }}
            >
              During the conception of my end-of-studies thesis for my first bachelor's degree, I joined the R&D team at Aproove for a 15-week internship. The project aimed to develop a state-of-the-art solution to integrate the Aproove proofing and versioning system into the Adobe application environment.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: Delivering a working Adobe plugin enabling real-time exchange of geometric data, surpassing the initial design brief and ahead of the deadline. The remaining time was dedicated to developing a prototype from scratch for proofing 3D files inside the browser. The prototype was accepted by the CEO for further integration into the Aproove suite.
            </Typography>
          </Paper>
          <Paper
            key={3}
            elevation={0}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, marginBottom: 2, gap: { xs: 1, sm: 2 } }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 0.5,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  }}
                >
                  Software development internship
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                  }}
                >
                  AGC Moustier
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 1 }}>
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
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
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
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                textAlign: 'justify',
              }}
            >
              I had the opportunity to work a summer student job supporting the plant's IT team and commercial office. Streamlined SAP dashboards to Power BI. Collaborated with the AGC IT team to expand the unique IT/OT system capabilities from Moustier to other plants.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a0a0a0' : '#555555',
                lineHeight: 1.6,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                marginTop: 1,
                textAlign: 'justify',
              }}
            >
              Outcome: The dashboards were tested and deployed. The IT/OT system expansion is now in production, and my work was recognized for its dynamic and adaptive implementation.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

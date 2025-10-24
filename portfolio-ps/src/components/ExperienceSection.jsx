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
              On my initiative, and with the help of Mathis Bruyère, I proposed the development of a CRM solution to the leadership of "Code it Bryan!", the ASBL behind Logiscool Mons.
              The objective was to automate manual tasks done with excel sheets.
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
              Outcome: By 2025, the solution fully handles databases, facturation, statistical trackers, attendances and automatic mailing. In the second half of 2024, the system allowed students more than 160 times to be proposed to attend a class they had missed. That is more than 10% of every lesson given having a student catching up his missed class automatically.
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
              I am hired as a titular computer science teacher at Logiscool Mons, a coding school for kids and teenagers. I teach programming in Python, JavaScript, C# (Unity) and AI concepts and tools.
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
              Outcome: At the end of last year, my students brought me chocolate.
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
              For my end of studies thesis of my first bachelor degree, I joined the R&D team at Aproove for a 15 week internship. The project aimed to develop a state of the art solution to integrate the Aproove proofing and versioning system into the Adobe application environment.
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
              Outcome: Delivered a working Adobe plugin enabling real time exchange of geometric data surpassing the initial design brief and before the deadline. The remaining time was dedicated to developing from scratch a prototype for proofing 3D files inside the browser. The prototype was approved by the CEO for further integration into the Aproove suite.
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
              Summer student job supporting the plant’s IT team and commercial bureau. Streamlined SAP dashboards to Power BI. Worked with the IT team of AGC to expand the IT/OT system capabilities unique to Moustier to other plants.
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
              Outcome: The dashboards were tested and deployed. The IT/OT system expansion is in production, and my work was recognized for its dynamic and adaptive implementation.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

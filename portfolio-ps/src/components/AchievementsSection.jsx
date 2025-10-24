import { Box, Container, Typography, Grid, Paper, Collapse, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

export function AchievementsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [openIndexes, setOpenIndexes] = useState({})

  const toggleOpen = (i) => setOpenIndexes((s) => ({ ...s, [i]: !s[i] }))


  return (
    <Box
      sx={{
        paddingY: 8,
        background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
      }}
    >
  <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
          }}
        >
          Achievements & notable experiences
        </Typography>

  <Grid container spacing={3} sx={{ justifyContent: 'center', maxWidth: 1200, alignItems: 'stretch' }}>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  WorldSkills Industry 4.0 Championship
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2025
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Preselected for the WorldSkills Industry 4.0
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwXYCqqGT3Dj34m47vJrl-_1PWRerKscoxw&s"
                alt="WorldSkills Industry 4.0 Championship"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[0]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  Preselected for further training and invited to a 3 days national finale competition at the StarTech day 2025 after qualification on a Siemens PLC / pneumatic system programming challenge.
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(0)}>
                  {openIndexes[0] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  Tech Goes Wild Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2024
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                3rd place and Microsoft jury's award for an innovative technical solution
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="https://i.ytimg.com/vi/jD-oPebTRpw/sddefault.jpg"
                alt="Tech Goes Wild Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[1]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  Our team developed an AI agent capable of intaking a massive amount of data on the basis of RAG and then give a personalized answer. The AI agent was meant to be used on any kind of platform, even older hardware and totally independentelly from the internet. We won the 3rd place as well as the Microsoft jury's award for most innovative technical solution.
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(1)}>
                  {openIndexes[1] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  Student Entrepreneur
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2023
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Began working as a part-time freelance full stack developer
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="https://cdn.discordapp.com/attachments/1363859175980929076/1429810761403990106/image.png?ex=68f77e8a&is=68f62d0a&hm=fc0c5ea264ced2cb881d9d3286eafe63f8fde83ba8b0cd246b12edac24dd08a1&"
                alt="Student Entrepreneur"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[2]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  Encouraged by the success of LMI and support from the director of Logiscool Mons, I began working as a freelance fullstack software developer. Since then I have completed multiple small projects to gain practical experience in software delivery, entrepreneurship, and client communication.
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(2)}>
                  {openIndexes[2] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  Dev vs Wild Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2023
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Created a VR multiplayer online game
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="https://i.ytimg.com/vi/HqmJ21fm_Ac/maxresdefault.jpg"
                alt="Dev vs Wild Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[3]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  Our team developed a VR  multiplayer online game with unity. 
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(3)}>
                  {openIndexes[3] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  Space Office Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2022
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Created a space resource-management simulation application with deep-learning components
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src=""
                alt="Space Office Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[4]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  Developed a Java/JavaFX application to simulate resource consumption and risk management in space environments. The simulator produced datasets that were visualized on a dashboard and used to train deep-learning models aimed at identifying critical resources and adaptation needs in hazardous scenarios.
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(4)}>
                  {openIndexes[4] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  School porject selected for implementation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2022
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Project selected for implementation in the HELHa Mons accounting department
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
                alt="Academic Recognition"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description with read more */}
              <Collapse in={!!openIndexes[5]} collapsedSize={72}>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#cfcfcf' : '#222222',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}
                >
                  In my first year at HELHa Mons, students were asked to develop a tool for the accounting department to manage financial data (expenses, invoices, budgets, etc.). My solution was selected for use. A planned presentation to the director and accounting team was postponed due to COVID-19; the project was later presented to the incoming cohort.
                </Typography>
              </Collapse>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button size="small" onClick={() => toggleOpen(5)}>
                  {openIndexes[5] ? 'Read less' : 'Read more'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

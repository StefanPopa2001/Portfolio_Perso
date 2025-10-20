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
          Achievements
        </Typography>

  <Grid container spacing={3} sx={{ justifyContent: 'center', maxWidth: 1200, alignItems: 'stretch' }}>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwXYCqqGT3Dj34m47vJrl-_1PWRerKscoxw&s"
                  alt="WorldSkills Industry 4.0 Championship"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    🏆
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  WorldSkills Industry 4.0 Championship
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Selected for prestigious international competition showcasing industrial automation expertise
                </Typography>

                <Collapse in={!!openIndexes[0]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    Prepared and competed on challenges spanning PLC programming, sensor integration, industrial networking, and data acquisition pipelines aligned with Industry 4.0 standards. Emphasized reliability, safety, and real-time performance while coordinating troubleshooting under tight time constraints.
                  </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(0)}>
                    {openIndexes[0] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://i.ytimg.com/vi/HqmJ21fm_Ac/hqdefault.jpg"
                  alt="Tech Goes Wild Hackathon"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    🥇
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  Tech Goes Wild Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Podium finish and Microsoft Jury's Award for innovative technical solution
                </Typography>

                <Collapse in={!!openIndexes[1]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >

                    Developed an AI‑powered solution in partnership with Microsoft and OpenAI. Our team created a flexible framework for dynamic data intake and intelligent responses. The application featured a lightweight AI agent that could be embedded at any software level, supporting conversational queries, live audio discussions, image analysis, personalization, and response filtering—all backed by a user‑updateable knowledge base. Recognized by the Microsoft and Proximus jury, our coordinator presented the project to the Regional Investment Board with success and managed to acquire funding for hardware capable of implementing our porject at the HELHa to be used by the students.
  
                     </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(1)}>
                    {openIndexes[1] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://cdn.discordapp.com/attachments/1363859175980929076/1429810761403990106/image.png?ex=68f77e8a&is=68f62d0a&hm=fc0c5ea264ced2cb881d9d3286eafe63f8fde83ba8b0cd246b12edac24dd08a1&"
                  alt="Student Entrepreneur"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    🚀
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  Student Entrepreneur
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Began working as a freelance full stack software developer
                </Typography>

                <Collapse in={!!openIndexes[2]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                  Inspired by the success of LMI, the director of Logiscool Mons encouraged me to start working as a software developer. Since then I work as a freelance full stack software engineer doing small gigs left and right. My main objective with this endeavor is to gain experience in project development, entrepreneurship, and communication with the client.
                  </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(2)}>
                    {openIndexes[2] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
                  alt="Dev vs Wild Hackathon"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    💻
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  Dev vs Wild Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Competed at Microsoft Innovation Center for a hackaton about the theme of the wild life
                </Typography>

                <Collapse in={!!openIndexes[3]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    Our team developed a VR online game that was about avoiding obstacles and dangerous animals controller onlined by another user on a web interface. The web interface allowed the user to see the progress of the player in the VR level, and with buttons triggers traps.
                  </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(3)}>
                    {openIndexes[3] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                  alt="Space Office Hackathon"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    🌌
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  Space Office Hackathon
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Participated in Microsoft Innovation Center innovation challenge
                </Typography>

                <Collapse in={!!openIndexes[4]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    Created an application with Java and JavaFX for simulating the resource drain and management on a spatial environment. The objective of the application was to simulate different environments and their impact on resource consumption and accident chances. The application itself was thought of as a visual management game, but the created data could then be visualized on a dashboard and fed to a deep learning model. The point was to identify what resources were critical and the need for adaptation in a risk environment.
                  </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(4)}>
                    {openIndexes[4] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
                minHeight: 420,
              }}
            >
              {/* Photo Card - Square */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  marginBottom: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
                  alt="Academic Recognition"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>

              {/* Achievement Info */}
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    ⭐
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    marginBottom: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  Academic Recognition
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#d0d0d0' : '#333333',
                    lineHeight: 1.5,
                    flex: 0,
                  }}
                >
                  Project selected for implementation in HELHa Mons accounting department
                </Typography>

                <Collapse in={!!openIndexes[5]} collapsedSize={72} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#cfcfcf' : '#222222',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    During my first year at HELHa Mons, every student was tasked with developing a solution for the accounting department by creating a visual application written in basic capable of working with excel sheets that could track all the financial data, notes de frais of professeurs, factures, bidgets, ... My version of the application was selected to be used, and a presentation of was supposed to be done in front of the direcito and accounting team of HELHa Mons, but due tu Covid and delays I was asked to present it in front of the freshemen the next year.
                  </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button size="small" onClick={() => toggleOpen(5)}>
                    {openIndexes[5] ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

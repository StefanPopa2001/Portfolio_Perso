import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function AchievementsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'


  return (
    <Box
      sx={{
        paddingY: 8,
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
                  WorldSkills Industry 4.0 Gold medal
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
                Gold medal at the Belgian National Finals of WorldSkills Industry 4.0
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/gold.jpg`}
                alt="WorldSkills Industry 4.0 Championship"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                After the preselection phase consisting of a Siemens automate programmation to pilot a pneumatic system, I qualified for the national finale at the startech 2025 and won the gold medal. I was then selected to represent Belgium at the WorldSkills mondial competition in Shanghai 2026.
              </Typography>
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
                3rd place and the Microsoft jury's award for an innovative technical solution
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/techgoeswild.jpg`}
                alt="Tech Goes Wild Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                My team and I developed an AI agent capable of analysing a massive amount of data and giving personalized answers. The AI agent was designed to run on any kind of hardware and independently of the internet. We won 3rd place as well as the Microsoft jury's award for the most innovative technical solution. This was my first AI-based project.
              </Typography>
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
                Began working as a part-time freelance full-stack developer
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/entrepreneur2.jpg`}
                alt="Student Entrepreneur"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                Encouraged by the success of LMI and the support from the director of Logiscool Mons, I began working as a freelance full-stack software developer. Since then, I have completed multiple projects in my free time to gain practical experience in software delivery and client communication.
              </Typography>
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
                src={`${import.meta.env.BASE_URL}images/techvswild2.JPG`}
                alt="Dev vs Wild Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                Our team developed a VR multiplayer online game with Unity. This hackathon in particular is special to me because we had the opportunity to see lots of people testing and enjoying our game. On the development side, this experience was very enriching because all members of the team had very different skills, and it was a good challenge to combine everyone's efforts.
              </Typography>
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
                Created a space resource-management simulation application with deep learning components
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/spaceoffice2.jpg`}
                alt="Space Office Hackathon"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                Developed a Java/JavaFX application to simulate resource consumption and risk management in space environments. The simulator produced datasets that were visualized on a dashboard and used to train deep learning models aimed at identifying critical resources and adaptation needs in hazardous scenarios. This has been the most enriching experience so far due to the number of technologies I had the chance to discover.
              </Typography>
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
                  Project implemented at HELHa
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
                Project implemented at the HELHa Mons accounting department
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/helha_logo.jpg`}
                alt="Academic Recognition"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                In my first year at HELHa Mons, students were asked to develop a tool for the accounting department to manage financial data (expenses, invoices, budgets, etc.). My solution was selected for use in the accounting department. I also had the opportunity to present the project to other students and teachers to showcase what can be developed with the skills learned at HELHa.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

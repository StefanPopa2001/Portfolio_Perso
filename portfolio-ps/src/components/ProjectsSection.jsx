import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import RocketIcon from '@mui/icons-material/Rocket'

export function ProjectsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const projects = [
    {
      title: 'Rudy et Fanny',
      type: 'professional', // professional or school
      inProduction: true,
        description: 'A food ordering and delivery website for a restaurant. This project is notable because it is my first professional project to be self-hosted, and was designed with mobile and client-first principles.',
      techStack: ["React", "Node.js", "Express JS", "PostgreSQL", "Prisma", "Docker", "Docker Compose", "Traefik", "Javascript", "Typescript"],
      githubUrl: 'https://github.com/StefanPopa2001/RF-Food-Delivery-App',
      liveUrl: 'https://rudyetfanny.be',
      images: ["images/rf_carousel_2.png"]
    },
    {   
      title: 'Logiscool Mons Intranet 3',
      type: 'professional', // professional or school
      inProduction: false,
        description: 'Logiscool Mons Intranet 3 is a web platform CRM designed to measure the needs of Logiscool Mons. It is meant to be modular and as easy as possible to maintain. Deployment to production is scheduled for early 2026.',
      techStack: ["React", "Node.js", "Express JS", "PostgreSQL", "Prisma", "Docker", "Docker Compose", "Traefik", "Javascript", "Typescript"],
      githubUrl: 'https://github.com/StefanPopa2001/LMI-3',
      liveUrl: '',
      images: [
        "images/lmi3_carousel_1.png"
       
      ]
    },
    {   
      title: 'Automated warehouse system',
      type: 'school', // professional or school
      inProduction: false,
        description: 'In my second year at HELHa Charleroi, I was tasked with building an automated warehouse system. A camera would scan AprilTags on items inside the frame of a 3D printer, and the stock is displayed on a web application and a small display directly on the frame. Users can order items from a keypad on the frame or the website, and the arm of the frame picks and places the items into a delivery zone.',
      techStack: ['Next JS', 'Node.js', 'MySQL', 'Microcontrollers', 'SSE',"Embedded systems"],
      githubUrl: '',
      liveUrl: '',
      images: ["images/projet2.jpg"]
    },
    {
      title: "Les Amitiés Françaises de Mons conférences",
      type: 'professional', // professional or school
      inProduction: true,
        description: 'A showcase website deployed with Google Firebase. This website was built voluntarily for the president of the association Les Amitiés Françaises de Mons. This project is important to me because it was the first time I built something optimized for Google referencing. The website was built to be hosted for free and automatically updates itself to avoid regular maintenance.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Google Firebase'],
      githubUrl: 'https://github.com/StefanPopa2001/Amiti-s-FR',
      liveUrl: 'https://les-amities-francaises-de-mons.web.app/',
      images: ["images/afr_carousel_1.png"]
    },
    {
      title: 'Logiscool Mons Intranet 2',
      type: 'professional', 
      inProduction: true,
        description: 'An Office 365 suite solution for Code it Bryan. Despite this project being built on low-code Microsoft technologies, it showcases my ability to create a working solution no matter the environment or technology available.',
      techStack: ['Power apps', 'Power automate', 'Microsoft database','Sharepoint'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/lmi2.png']
    },
    {
      title: 'Logiscool Mons Intranet 1',
      type: 'professional', // professional or school
      inProduction: false,
        description: 'Logiscool Mons Intranet 1 is the first iteration of an attempt to build a CRM to handle the main tasks required to run Logiscool Mons. This project has been put on hiatus since LMI 2 due to the partnership with Microsoft, and recently the reboot of the project with more flexible technologies.',
      techStack: ['React', 'C#', 'Entity Framework', 'MySQL'],
      githubUrl: 'https://github.com/mathbruu/Lmi',
      liveUrl: '',
      images: ['images/lmi1.png']
    },
    {
      title: 'Small brother',
      type: 'school',
      inProduction: false,
        description: 'A full stack application for finding and signaling lost animals, available as a website and mobile app.',
      techStack: ['Angular', 'C#', 'Entity Framework','Kotlin', 'OOP', 'MySQL'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/sb.png']
    },
    {
      title: 'Frog-GER',
      type: 'school',
      inProduction: false,
        description: 'A graphic game built in C with the SFML library and manual memory management. This project was designed to be portable and run on both Windows and Linux systems.',
      techStack: ['C', 'SFML'],
      githubUrl: 'https://github.com/StefanPopa2001/FroggerSFML',
      liveUrl: '',
      images: ['images/frugger.png']
    },
    {
      title: 'Joker-Quizz',
      type: 'school',
      inProduction: false,
        description: 'A graphic board game featuring animations, multiplayer, and a focus on the principles of clean code and programming design patterns.',
      techStack: ['Java', 'Java FX','OOP'],
      githubUrl: 'https://github.com/your-username/joker-quizz',
      liveUrl: '',
      images: ['images/jq1.png']
    },
    {
      title: 'Rooter-ED',
      type: 'school',
      inProduction: false,
        description: 'A PyScript-powered web tool for IP administration. I am fond of this project because it allowed me to easily embed Python code into a web application.',
      techStack: ['PyScript', 'HTML', 'JavaScript','CSS'],
      githubUrl: 'https://github.com/StefanPopa2001/PyscriptWebIP',
      liveUrl: '',
      images: ['images/rootered.png']
    }
  ]

  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <Box sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Project screenshot"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
        {images.length > 1 && (
          <>
            <IconButton
              onClick={prevImage}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={nextImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 0.5 }}>
              {images.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    )
  }

  return (
    <Box
      id="projects"
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex', width: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: 3,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'flex-start',
                  gap: 2,
                  flex: 1,
                  height: '100%',
                  minHeight: { xs: 'auto' },
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Show image carousel if images are available */}
                {project.images && project.images.length > 0 && project.images[0] && (
                  <Box sx={{ flex: '0 0 25%', maxWidth: { xs: '60%', sm: '25%' }, mb: { xs: 2, sm: 0 }, flexShrink: 0, margin: { xs: '0 auto', sm: 0 } }}>
                    <ImageCarousel images={project.images} />
                  </Box>
                )}

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {/* Show icon based on project type */}
                      {project.type === 'professional' ? (
                        <Tooltip title="Professional Project">
                          <WorkIcon sx={{ color: isDark ? '#90caf9' : '#1976d2', fontSize: 28 }} />
                        </Tooltip>
                      ) : (
                        <Tooltip title="School Project">
                          <SchoolIcon sx={{ color: isDark ? '#81c784' : '#388e3c', fontSize: 28 }} />
                        </Tooltip>
                      )}
                      {/* Show production icon if inProduction is true */}
                      {project.inProduction && (
                        <Tooltip title="In Production">
                          <RocketIcon sx={{ color: isDark ? '#ffb74d' : '#f57c00', fontSize: 20 }} />
                        </Tooltip>
                      )}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: isDark ? '#ffffff' : '#000000',
                          fontSize: { xs: '1.1rem', sm: '1.5rem' },
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.liveUrl ? (
                        <IconButton
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          sx={{
                            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            color: isDark ? '#ffffff' : '#000000',
                            '&:hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
                          }}
                        >
                          <LanguageIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled aria-label="live site not available" sx={{ opacity: 0.4 }}>
                          <LanguageIcon />
                        </IconButton>
                      )}

                      {project.githubUrl ? (
                        <IconButton
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          sx={{
                            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            color: isDark ? '#ffffff' : '#000000',
                            '&:hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled aria-label="GitHub not available" sx={{ opacity: 0.4 }}>
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                    {project.techStack.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          color: isDark ? '#ffffff' : '#000000',
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: isDark ? '#d0d0d0' : '#333333',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
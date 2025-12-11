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
        description: 'A food ordering and delivery website developed for a restaurant. This project is notable as my first self-hosted professional project, designed with a mobile-first and client-centric approach.',
      techStack: ["React", "Node.js", "Express JS", "PostgreSQL", "Prisma", "Docker", "Docker Compose", "Traefik", "javaScript", "Typescript"],
      githubUrl: 'https://github.com/StefanPopa2001/RF-Food-Delivery-App',
      liveUrl: 'https://rudyetfanny.be',
  images: [`${import.meta.env.BASE_URL}images/rf_carousel_2.png`]
    },
    {   
      title: 'Logiscool Mons Intranet 3',
      type: 'professional', // professional or school
      inProduction: false,
        description: 'Logiscool Mons Intranet 3 is a web-based CRM platform designed to meet the specific operational needs of Logiscool Mons. It was built to be modular and easily maintainable. Deployment to production is scheduled for early 2026.',
      techStack: ["React", "Node.js", "Express JS", "PostgreSQL", "Prisma", "Docker", "Docker Compose", "Traefik", "javaScript", "Typescript"],
      githubUrl: 'https://github.com/StefanPopa2001/LMI-3',
      liveUrl: '',
      images: [
        `${import.meta.env.BASE_URL}images/lmi3_carousel_1.png`
      ]
    },
    {   
      title: 'Automated warehouse system',
      type: 'school', // professional or school
      inProduction: false,
        description: 'During my second year at HELHa Charleroi, I was tasked with building an automated warehouse system. A camera scanned April Tags on items located within a 3D printer frame, and the stock was displayed on both a web application and a local display. Users could order items via a keypad or the website, prompting the system to pick and place the items into a delivery zone.',
      techStack: ['Next JS', 'Node.js', 'MySQL', 'Microcontrollers', 'SSE',"Embedded systems"],
      githubUrl: '',
      liveUrl: '',
  images: [`${import.meta.env.BASE_URL}images/projet2.jpg`]
    },
    {
      title: "Les Amitiés Françaises de Mons conférences",
      type: 'professional', // professional or school
      inProduction: true,
        description: 'A showcase website deployed using Google Firebase, built voluntarily for the president of the association "Les Amitiés Françaises de Mons." This project marked my first experience with search engine optimization (SEO). The website was designed to be hosted for free and includes automated updates to minimize maintenance requirements.',
      techStack: ['HTML', 'CSS', 'javaScript', 'Google Firebase'],
      githubUrl: 'https://github.com/StefanPopa2001/Amiti-s-FR',
      liveUrl: 'https://les-amities-francaises-de-mons.web.app/',
  images: [`${import.meta.env.BASE_URL}images/afr_carousel_1.png`]
    },
    {
      title: 'Logiscool Mons Intranet 2',
      type: 'professional', 
      inProduction: true,
        description: 'An Office 365 suite solution developed for Code it Bryan. Although built using low-code Microsoft technologies, this project demonstrates my ability to deliver functional solutions regardless of the environment or available technology.',
      techStack: ['Power apps', 'Power automate', 'Microsoft database','Sharepoint'],
      githubUrl: '',
      liveUrl: '',
  images: [`${import.meta.env.BASE_URL}images/lmi2.png`]
    },
    {
      title: 'Small brother',
      type: 'school',
      inProduction: false,
        description: 'A full-stack application for finding and reporting lost animals, available as both a website and a mobile app.',
      techStack: ['Angular', 'C#', 'Entity Framework','Kotlin', 'OOP', 'MySQL'],
      githubUrl: '',
      liveUrl: '',
  images: [`${import.meta.env.BASE_URL}images/sb.png`]
    },
    {
      title: 'Joker-Quizz',
      type: 'school',
      inProduction: false,
        description: 'A digital board game featuring animations and multiplayer functionality, developed with a strong focus on clean code principles and design patterns.',
      techStack: ['Java', 'Java FX','OOP'],
      githubUrl: 'https://github.com/your-username/joker-quizz',
      liveUrl: '',
  images: [`${import.meta.env.BASE_URL}images/jq1.png`]
    },
    
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
      <Box sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Project screenshot"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
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

                  <Typography variant="h6"
          sx={{
            fontWeight: 200,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          }}>

          List of projects showcasing my skills:
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
                  <Box sx={{ flex: '0 0 25%', maxWidth: { xs: '100%', sm: '25%' }, mb: { xs: 2, sm: 0 }, flexShrink: 0, margin: { xs: '0 auto', sm: 0 }, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <ImageCarousel images={project.images} />
                    {/* Tags for project type and production status */}
                    <Box sx={{ display: 'flex', width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
                      <Box
                        sx={{
                          flex: project.inProduction ? 1 : 1,
                          width: project.inProduction ? '50%' : '100%',
                          padding: '8px 12px',
                          backgroundColor: project.type === 'professional' 
                            ? (isDark ? 'rgba(144, 202, 249, 0.8)' : 'rgba(25, 118, 210, 0.15)')
                            : (isDark ? 'rgba(129, 199, 132, 0.8)' : 'rgba(56, 142, 60, 0.15)'),
                          color: project.type === 'professional'
                            ? (isDark ? '#ffffff' : '#1976d2')
                            : (isDark ? '#ffffff' : '#388e3c'),
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          borderRadius: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.5,
                        }}
                      >
                        {project.type === 'professional' ? (
                          <WorkIcon sx={{ fontSize: '1rem' }} />
                        ) : (
                          <SchoolIcon sx={{ fontSize: '1rem' }} />
                        )}
                        {project.type === 'professional' ? 'Professional' : 'School'}
                      </Box>
                      {project.inProduction && (
                        <Box
                          sx={{
                            flex: 1,
                            width: '50%',
                            padding: '8px 12px',
                            backgroundColor: isDark ? 'rgba(255, 183, 77, 0.8)' : 'rgba(245, 124, 0, 0.15)',
                            color: isDark ? '#ffffff' : '#f57c00',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textAlign: 'center',
                            borderRadius: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          <RocketIcon sx={{ fontSize: '1rem' }} />
                          In production
                        </Box>
                      )}
                    </Box>
                  </Box>
                )}

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: isDark ? '#ffffff' : '#000000',
                        fontSize: { xs: '0.9rem', sm: '1.5rem' },
                      }}
                    >
                      {project.title}
                    </Typography>
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
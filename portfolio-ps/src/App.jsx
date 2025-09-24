import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  LinearProgress,
} from "@mui/material"
import {
  Email,
  Phone,
  LocationOn,
  DriveEta,
  Work,
  School,
  EmojiEvents,
  Code,
  Language,
  Person,
} from "@mui/icons-material"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#10b981",
      light: "#34d399",
      dark: "#059669",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
    divider: "rgba(148, 163, 184, 0.12)",
    success: {
      main: "#10b981",
    },
    warning: {
      main: "#f59e0b",
    },
    info: {
      main: "#3b82f6",
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(148, 163, 184, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.8rem",
          height: "28px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
})

function App() {
  const data = {
    name: "Stefan Popa",
    title: "Industrial Computing Student & Entrepreneur",
    about:
      "Motivated student entrepreneur seeking an internship in industrial computing and automation. Passionate about bridging the gap between technology and practical applications in industrial environments.",
    languages: [
      { name: "French", level: "Native", proficiency: 100 },
      { name: "Romanian", level: "Native", proficiency: 100 },
      { name: "English", level: "C1", proficiency: 85 },
      { name: "Dutch", level: "A1", proficiency: 25 },
    ],
    workExperience: [
      {
        company: "Code it Bryan!",
        position: "System Administrator and Webmaster",
        period: "Nov. 2023 - Ongoing",
        description:
          "Developed and maintained the digital infrastructure of a private school of 200 students and teachers.",
        type: "Current Position",
        color: "success",
      },
      {
        company: "Logiscool",
        position: "Part-time Job as Teacher",
        period: "Nov. 2021 - Ongoing",
        description: "Part-time computer science and AI technologies teacher.",
        type: "teaching",
        color: "info",
      },
      {
        company: "Aproove",
        position: "R&D Software Development Internship",
        period: "Feb. 2023 - June 2023",
        description:
          "Developed an Adobe plugin for live communication of geometrical data. Conceived a 3D web proofing system prototype.",
        type: "internship",
        color: "primary",
      },
      {
        company: "AGC Moustier",
        position: "Software Development Internship",
        period: "June 2022 - July 2022",
        description:
          "Further expanded services related to data gathering, treatment and display to other AGC plants across Belgium. Created dashboards for the commercial office of the plant.",
        type: "internship",
        color: "primary",
      },
    ],
    skills: {
      soft: ["Patience", "Honesty", "Communication", "Adaptability", "Project Management"],
      hard: {
        "Project Management": ["Git/Gitlab", "Agile", "Scrum", "Kanban", "Pert", "Gantt", "Jira", "Trello", "Notion"],
        "Programming Languages & Frameworks": [
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "C++",
          "React",
          "Node.js",
          "Express",
          "Django",
          "Spring Boot",
        ],
        "Databases & Tools": [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "AWS",
          "Azure",
          "Linux",
          "Windows Server",
        ],
        "Industrial Computing": [
          "PLC Programming",
          "SCADA Systems",
          "Industrial Networks",
          "Automation",
          "IoT",
          "Embedded Systems",
        ],
      },
    },
    education: [
      {
        degree: "Bachelor degree in Industrial computing (systems and networks)",
        institution: "Haute École Louvain en Hainaut Charleroi",
        status: "Graduating in 2026 - In Progress",
        current: true,
      },
      {
        degree: "Bachelor degree in management computing (application development)",
        institution: "Haute École Louvain en Hainaut Mons",
        status: "Graduated in 2023 with upper class honor - Completed",
        current: false,
      },
    ],
    achievements: [
      {
        year: "2025",
        description: "Preselected in the 4.0 Industry World Skills championship",
        type: "competition",
        icon: "🏆",
      },
      {
        year: "2024",
        description: 'Podium & Microsoft jury\'s award at the "Tech goes Wild" Hackaton',
        type: "hackathon",
        icon: "🥇",
      },
      {
        year: "2023",
        description: "Began as student entrepreneur to work as a freelance software developer",
        type: "entrepreneurship",
        icon: "🚀",
      },
      {
        year: "2023",
        description: '"Dev vs Wild" Hackaton at the Microsoft Innovation Center',
        type: "hackathon",
        icon: "💻",
      },
      {
        year: "2022",
        description: '"Space Office" Hackaton at the Microsoft Innovation Center',
        type: "hackathon",
        icon: "🌌",
      },
      {
        year: "2022",
        description: "Project nominated for use in the accounting department at HELHa Mons",
        type: "recognition",
        icon: "⭐",
      },
    ],
    contact: {
      location: "7060 Soignies, Belgium",
      transportation: "Driving license + car",
      email: "popa.stefan.pro@gmail.com",
      phone: "+32 486 06 50 45",
      message:
        "Ready to discuss opportunities in industrial computing and automation. Let's connect and explore how we can work together.",
    },
  }

  const SectionCard = ({ title, icon, children, ...props }) => (
    <Card
      sx={{
        mb: 4,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        ...props.sx,
      }}
      {...props}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          {icon && (
            <Box
              sx={{
                mr: 2,
                p: 1.5,
                borderRadius: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          )}
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 8,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              textAlign: "center",
              mb: 6,
              p: 6,
              borderRadius: 4,
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #10b981, #3b82f6)",
              },
            }}
          >
            <Avatar
              sx={{
                width: 140,
                height: 140,
                mx: "auto",
                mb: 3,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                fontSize: "2.5rem",
                fontWeight: 800,
                border: "4px solid rgba(59, 130, 246, 0.2)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
            >
              {data.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Avatar>
            <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 2 }}>
              {data.name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 3,
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              {data.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Chip
                label="Available for Internship"
                color="success"
                variant="filled"
                sx={{ fontWeight: 600, px: 2, py: 1, height: "auto" }}
              />
              <Chip
                label="Industrial Computing"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600, px: 2, py: 1, height: "auto" }}
              />
            </Box>
          </Paper>

          <SectionCard title="About" icon={<Person />}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              {data.about}
            </Typography>
          </SectionCard>

          <SectionCard title="Languages" icon={<Language />}>
            <Grid container spacing={3}>
              {data.languages.map((lang, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {lang.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {lang.level}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={lang.proficiency}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "rgba(148, 163, 184, 0.2)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                          background:
                            lang.proficiency === 100
                              ? "linear-gradient(90deg, #10b981, #34d399)"
                              : "linear-gradient(90deg, #3b82f6, #60a5fa)",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </SectionCard>

          <SectionCard title="Work Experience" icon={<Work />}>
            {data.workExperience.map((exp, index) => (
              <Box key={index} sx={{ mb: index < data.workExperience.length - 1 ? 4 : 0 }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "rgba(148, 163, 184, 0.05)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      bgcolor: "rgba(148, 163, 184, 0.08)",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {exp.position}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 1 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Chip
                      label={exp.type}
                      color={exp.color || "default"}
                      size="small"
                      sx={{ ml: 2, fontWeight: 500 }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                    {exp.period}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </SectionCard>

          <SectionCard title="Skills" icon={<Code />}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                Soft Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {data.skills.soft.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="secondary"
                    sx={{
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      height: "auto",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {Object.entries(data.skills.hard).map(([category, skills]) => (
              <Box key={category} sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                  {category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      sx={{
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        height: "auto",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          borderColor: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </SectionCard>

          <SectionCard title="Education" icon={<School />}>
            {data.education.map((edu, index) => (
              <Box key={index} sx={{ mb: index < data.education.length - 1 ? 3 : 0 }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: edu.current ? "rgba(16, 185, 129, 0.1)" : "rgba(148, 163, 184, 0.05)",
                    border: `1px solid ${edu.current ? "rgba(16, 185, 129, 0.2)" : "rgba(148, 163, 184, 0.1)"}`,
                    position: "relative",
                  }}
                >
                  {edu.current && (
                    <Chip
                      label="Current"
                      color="success"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontWeight: 600,
                      }}
                    />
                  )}
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, pr: edu.current ? 10 : 0 }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 1 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {edu.status}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </SectionCard>

          <SectionCard title="Achievements" icon={<EmojiEvents />}>
            <Grid container spacing={3}>
              {data.achievements.map((ach, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: "rgba(148, 163, 184, 0.05)",
                      border: "1px solid rgba(148, 163, 184, 0.1)",
                      height: "100%",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        bgcolor: "rgba(148, 163, 184, 0.08)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                      <Typography sx={{ fontSize: "1.5rem", mr: 2 }}>{ach.icon}</Typography>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main", mb: 0.5 }}>
                          {ach.year}
                        </Typography>
                        <Chip
                          label={ach.type}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1, fontWeight: 500 }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {ach.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </SectionCard>

          <SectionCard
            title="Contact"
            icon={<Email />}
            sx={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "text.primary",
              }}
            >
              {data.contact.message}
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      mr: 2,
                      p: 1,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                    }}
                  >
                    <LocationOn />
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>{data.contact.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      mr: 2,
                      p: 1,
                      borderRadius: 2,
                      bgcolor: "secondary.main",
                      color: "primary.contrastText",
                      display: "flex",
                    }}
                  >
                    <DriveEta />
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>{data.contact.transportation}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      mr: 2,
                      p: 1,
                      borderRadius: 2,
                      bgcolor: "info.main",
                      color: "primary.contrastText",
                      display: "flex",
                    }}
                  >
                    <Email />
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>{data.contact.email}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      mr: 2,
                      p: 1,
                      borderRadius: 2,
                      bgcolor: "warning.main",
                      color: "primary.contrastText",
                      display: "flex",
                    }}
                  >
                    <Phone />
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>{data.contact.phone}</Typography>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3, opacity: 0.3 }} />

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Ready to Connect
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Let's discuss how we can work together on your next industrial computing project
              </Typography>
            </Box>
          </SectionCard>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App

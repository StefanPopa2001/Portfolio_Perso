import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Chip, Divider } from '@mui/material';
import { Email, Phone, LocationOn, DriveEta } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const data = {
    name: 'Stefan Popa',
    title: 'Industrial Computing Student & Entrepreneur',
    about: 'Motivated student entrepreneur seeking an internship in industrial computing and automation. Passionate about bridging the gap between technology and practical applications in industrial environments.',
    languages: [
      { name: 'French', level: 'Native' },
      { name: 'Romanian', level: 'Native' },
      { name: 'English', level: 'C1' },
      { name: 'Dutch', level: 'A1' },
    ],
    workExperience: [
      {
        company: 'Code it Bryan!',
        position: 'System Administrator and Webmaster',
        period: 'Nov. 2023 - Ongoing',
        description: 'Developed and maintained the digital infrastructure of a private school of 200 students and teachers.',
        type: 'Current Position',
      },
      {
        company: 'Logiscool',
        position: 'Part-time Job as Teacher',
        period: 'Nov. 2021 - Ongoing',
        description: 'Part-time computer science and AI technologies teacher.',
        type: 'teaching',
      },
      {
        company: 'Aproove',
        position: 'R&D Software Development Internship',
        period: 'Feb. 2023 - June 2023',
        description: 'Developed an Adobe plugin for live communication of geometrical data. Conceived a 3D web proofing system prototype.',
        type: 'internship',
      },
      {
        company: 'AGC Moustier',
        position: 'Software Development Internship',
        period: 'June 2022 - July 2022',
        description: 'Further expanded services related to data gathering, treatment and display to other AGC plants across Belgium. Created dashboards for the commercial office of the plant.',
        type: 'internship',
      },
    ],
    skills: {
      soft: ['Patience', 'Honesty', 'Communication', 'Adaptability', 'Project Management'],
      hard: {
        'Project Management': ['Git/Gitlab', 'Agile', 'Scrum', 'Kanban', 'Pert', 'Gantt', 'Jira', 'Trello', 'Notion'],
        'Programming Languages & Frameworks': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Express', 'Django', 'Spring Boot'],
        'Databases & Tools': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Azure', 'Linux', 'Windows Server'],
        'Industrial Computing': ['PLC Programming', 'SCADA Systems', 'Industrial Networks', 'Automation', 'IoT', 'Embedded Systems'],
      },
    },
    education: [
      {
        degree: 'Bachelor degree in Industrial computing (systems and networks)',
        institution: 'Haute École Louvain en Hainaut Charleroi',
        status: 'Graduating in 2026 - In Progress',
      },
      {
        degree: 'Bachelor degree in management computing (application development)',
        institution: 'Haute École Louvain en Hainaut Mons',
        status: 'Graduated in 2023 with upper class honor - Completed',
      },
    ],
    achievements: [
      { year: '2025', description: 'Preselected in the 4.0 Industry World Skills championship', type: 'competition' },
      { year: '2024', description: 'Podium & Microsoft jury\'s award at the "Tech goes Wild" Hackaton', type: 'hackathon' },
      { year: '2023', description: 'Began as student entrepreneur to work as a freelance software developer', type: 'entrepreneurship' },
      { year: '2023', description: '"Dev vs Wild" Hackaton at the Microsoft Innovation Center', type: 'hackathon' },
      { year: '2022', description: '"Space Office" Hackaton at the Microsoft Innovation Center', type: 'hackathon' },
      { year: '2022', description: 'Project nominated for use in the accounting department at HELHa Mons', type: 'recognition' },
    ],
    contact: {
      location: '7060 Soignies, Belgium',
      transportation: 'Driving license + car',
      email: 'popa.stefan.pro@gmail.com',
      phone: '+32 486 06 50 45',
      message: 'Ready to discuss opportunities in industrial computing and automation. Let\'s connect and explore how we can work together.',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
            {data.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Typography variant="h3" component="h1" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {data.title}
          </Typography>
        </Box>

        {/* About */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>About</Typography>
            <Typography variant="body1">{data.about}</Typography>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Languages</Typography>
            <Grid container spacing={2}>
              {data.languages.map((lang, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">{lang.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{lang.level}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Work Experience</Typography>
            {data.workExperience.map((exp, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6">{exp.position}</Typography>
                <Typography variant="subtitle1" color="primary">{exp.company}</Typography>
                <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{exp.type}</Typography>
                <Typography variant="body1">{exp.description}</Typography>
                {index < data.workExperience.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Skills</Typography>
            <Typography variant="h5" gutterBottom>Soft Skills</Typography>
            <Box sx={{ mb: 3 }}>
              {data.skills.soft.map((skill, index) => (
                <Chip key={index} label={skill} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
            {Object.entries(data.skills.hard).map(([category, skills]) => (
              <Box key={category} sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>{category}</Typography>
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                ))}
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Education</Typography>
            {data.education.map((edu, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="primary">{edu.institution}</Typography>
                <Typography variant="body2" color="text.secondary">{edu.status}</Typography>
                {index < data.education.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Achievements</Typography>
            {data.achievements.map((ach, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h6">{ach.year}</Typography>
                <Typography variant="body1">{ach.description}</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{ach.type}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>{data.contact.message}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography>{data.contact.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <DriveEta sx={{ mr: 1 }} />
                  <Typography>{data.contact.transportation}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ mr: 1 }} />
                  <Typography>{data.contact.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone sx={{ mr: 1 }} />
                  <Typography>{data.contact.phone}</Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mt: 2 }}>Get In Touch</Typography>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;

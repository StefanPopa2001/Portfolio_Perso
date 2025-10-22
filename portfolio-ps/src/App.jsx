import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AppThemeProvider } from './context/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

function AppContent() {
  const muiTheme = useTheme()
  const isDark = muiTheme.palette.mode === 'dark'

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#121212' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
      }}
    >
      <Navigation onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  )
}

export default function App() {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  )
}

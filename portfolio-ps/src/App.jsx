"use client"

import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { AppThemeProvider } from "./context/ThemeContext"
import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { SkillsSection } from "./components/SkillsSection"
import { EducationSection } from "./components/EducationSection"
import { AchievementsSection } from "./components/AchievementsSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"

function AppContent() {
  const muiTheme = useTheme()
  const isDark = muiTheme.palette.mode === "dark"

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 64 // navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark ? "#0a0a0a" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Navigation onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
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

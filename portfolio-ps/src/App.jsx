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

  const circles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20, // 20-60px
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 5 + 8, // 8-13s
  }))

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)",
        color: isDark ? "#ffffff" : "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {circles.map((circle) => (
        <Box
          key={circle.id}
          sx={{
            position: "absolute",
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            background: isDark
              ? "radial-gradient(circle, rgba(128, 128, 128, 0.3) 0%, rgba(128, 128, 128, 0) 70%)"
              : "radial-gradient(circle, rgba(100, 100, 100, 0.4) 0%, rgba(100, 100, 100, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(15px)",
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            animation: `flicker ${circle.duration}s ease-in-out infinite ${circle.delay}s`,
            "@keyframes flicker": {
              "0%, 100%": { opacity: 0.1 },
              "50%": { opacity: 0.5 },
            },
          }}
        />
      ))}

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

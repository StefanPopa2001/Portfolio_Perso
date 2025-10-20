import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useState } from 'react'
import { useThemeMode } from '../context/ThemeContext'
import portfolioData from '../data/portfolioData.json'

export function Navigation({ onScrollToSection }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useThemeMode()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))

  const navItems = ['About', 'Experience', 'Skills']

  const handleNavClick = (item) => {
    onScrollToSection(item.toLowerCase())
    setMobileOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isDark
            ? 'rgba(18, 18, 18, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          color: isDark ? '#ffffff' : '#000000',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: isDark ? '#ffffff' : '#000000',
            }}
          >
            {portfolioData.personal.name}
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    color: isDark ? '#d0d0d0' : '#666666',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: isDark ? '#ffffff' : '#000000',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={() => onScrollToSection('contact')}
                sx={{
                  backgroundColor: isDark ? '#ffffff' : '#000000',
                  color: isDark ? '#000000' : '#ffffff',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginLeft: 1,
                  '&:hover': {
                    backgroundColor: isDark ? '#e0e0e0' : '#1a1a1a',
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: isDark ? '#ffffff' : '#000000',
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <IconButton
              href={portfolioData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDark ? '#ffffff' : '#000000',
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href={portfolioData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDark ? '#ffffff' : '#000000',
              }}
            >
              <LinkedInIcon />
            </IconButton>

            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{
                  color: isDark ? '#ffffff' : '#000000',
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: isDark ? 'rgba(18, 18, 18, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderLeft: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            marginTop: '64px',
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            paddingTop: 2,
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                sx={{
                  cursor: 'pointer',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  },
                }}
                onClick={() => handleNavClick(item)}
              >
                <Box
                  sx={{
                    color: isDark ? '#d0d0d0' : '#666666',
                    fontSize: '0.95rem',
                  }}
                >
                  {item}
                </Box>
              </ListItem>
            ))}
            <ListItem
              sx={{
                cursor: 'pointer',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                },
              }}
              onClick={() => handleNavClick('contact')}
            >
              <Box
                sx={{
                  color: isDark ? '#ffffff' : '#000000',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                Contact
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

import { createContext, useState, useContext, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MantineProvider } from '@mantine/core'

const ThemeContext = createContext()

export function useThemeMode() {
  return useContext(ThemeContext)
}

export function AppThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: isDark ? '#ffffff' : '#000000',
          },
          secondary: {
            main: isDark ? '#f0f0f0' : '#1a1a1a',
          },
          background: {
            default: isDark ? '#121212' : '#ffffff',
            paper: isDark ? '#1e1e1e' : '#ffffff',
          },
          text: {
            primary: isDark ? '#ffffff' : '#000000',
            secondary: isDark ? '#b0b0b0' : '#666666',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [isDark]
  )

  const mantineTheme = {
    primaryColor: isDark ? 'dark' : 'gray',
    colorScheme: isDark ? 'dark' : 'light',
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <MantineProvider theme={mantineTheme}>
        <ThemeProvider theme={muiTheme}>
          {children}
        </ThemeProvider>
      </MantineProvider>
    </ThemeContext.Provider>
  )
}

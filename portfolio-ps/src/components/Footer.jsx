import { Box, Container, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export function Footer() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        paddingY: 3,
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        background: isDark ? '#121212' : '#ffffff',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: isDark ? '#808080' : '#999999',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © 2025 Stefan Popa. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              href="#"
              sx={{
                color: isDark ? '#808080' : '#999999',
                '&:hover': {
                  color: isDark ? '#ffffff' : '#000000',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: isDark ? '#808080' : '#999999',
                '&:hover': {
                  color: isDark ? '#ffffff' : '#000000',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

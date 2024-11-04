import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Theme provider ,global theme and global style
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

//Routes
import { Routes } from './routes'

//Authentication Context provider
import { AuthProvider } from './hooks/authentication'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)

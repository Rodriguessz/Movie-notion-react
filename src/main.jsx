import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Theme provider ,global theme and global style
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

//Routes
import { Routes } from './routes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)

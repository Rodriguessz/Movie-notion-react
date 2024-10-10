import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Theme provider ,global theme and global style
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

//Pages
import { Home } from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)

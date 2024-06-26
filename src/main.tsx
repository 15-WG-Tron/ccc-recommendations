import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {StyledEngineProvider} from '@mui/material/styles'
import CssBaseLine from '@mui/material/CssBaseline'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseLine />
    <App />
    </StyledEngineProvider>
  </React.StrictMode>,
)

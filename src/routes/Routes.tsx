import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../assets/styles/global'
import { DarkTheme } from '../assets/themes/dark'
import { lightTheme } from '../assets/themes/light'
import Home from '../pages/Home'

export default function Router() {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeProvider theme={theme ? lightTheme : DarkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<Home />} index />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

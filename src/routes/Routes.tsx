import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../assets/styles/global'
import { DarkTheme } from '../assets/themes/dark'
import { lightTheme } from '../assets/themes/light'
import Menu from '../components/Menu'
import Chart from '../pages/Chart'
import Help from '../pages/Help'
import Home from '../pages/Home'
import Message from '../pages/Message'

export default function Router() {
  const [theme, setTheme] = useState(false)
  function changeTheme() {
    setTheme(!theme)
  }
  return (
    <ThemeProvider theme={theme ? lightTheme : DarkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Menu changeTheme={changeTheme} />
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Chart />} path='chart' />
          <Route element={<Message />} path='message' />
          <Route element={<Help />} path='help' />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

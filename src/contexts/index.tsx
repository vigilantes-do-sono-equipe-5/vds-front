import { ReactNode, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Global, GlobalStyles } from '../assets/styles/global'
import { DarkTheme } from '../assets/themes/dark'
import { lightTheme } from '../assets/themes/light'
import Menu from '../components/Menu'
import { IProvidersProps } from '../interfaces/contexts.interfaces'
import { ContextDataProvider } from './ContextData'

function Providers({ children }: IProvidersProps): JSX.Element {
  const [theme, setTheme] = useState(false)
  function changeTheme() {
    setTheme(!theme)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? lightTheme : DarkTheme}>
        <ContextDataProvider>
          <Global>
            <GlobalStyles />
            <Menu changeTheme={changeTheme} />
            {children}
          </Global>
        </ContextDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Providers

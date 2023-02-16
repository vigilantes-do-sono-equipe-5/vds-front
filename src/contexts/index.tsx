import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Global, GlobalStyles } from '../assets/styles/global'
import { DarkTheme } from '../assets/themes/dark'
import { lightTheme } from '../assets/themes/light'
import Menu from '../components/Menu'
import { IProvidersProps } from '../interfaces/contexts.interfaces'
import { ContextCompanyProvider } from './ContextCompany'
import { ContextGadProvider } from './ContextGad'
import { ContextIsiProvider } from './ContextIsi'
import { ContextPhqProvider } from './ContextPhq'
import { ContextRatingsProvider } from './ContextRatings'
import { ContextSleepDiariesProvider } from './ContextSleepDiaries'

function Providers({ children }: IProvidersProps): JSX.Element {
  const [theme, setTheme] = useState(false)
  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? lightTheme : DarkTheme}>
        <ContextCompanyProvider>
          <ContextSleepDiariesProvider>
            <ContextGadProvider>
              <ContextIsiProvider>
                <ContextPhqProvider>
                  <ContextRatingsProvider>
                    <Global>
                      <GlobalStyles />
                      <Menu changeTheme={switchTheme} />
                      {children}
                    </Global>
                  </ContextRatingsProvider>
                </ContextPhqProvider>
              </ContextIsiProvider>
            </ContextGadProvider>
          </ContextSleepDiariesProvider>
        </ContextCompanyProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Providers

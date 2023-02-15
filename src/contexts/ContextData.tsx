import { createContext, ReactNode, useContext } from 'react'

interface IAllProvidersProps {
  children: ReactNode
}

const ConfigUserContext = createContext({})

export function ContextDataProvider({ children }: IAllProvidersProps) {
  const data = 'test'
  return (
    <ConfigUserContext.Provider value={data}>
      {children}
    </ConfigUserContext.Provider>
  )
}

export const useContextData = () => useContext(ConfigUserContext)

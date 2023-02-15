import { AxiosError, AxiosResponse } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../helpers/api'
import { ICompany, IDataContext } from '../interfaces/contextData.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const DataContext = createContext<IDataContext | {}>({})

export function ContextDataProvider({ children }: IAllProvidersProps) {
  const [companies, setCompanies] = useState<ICompany[]>()

  const getCompanies = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ICompany[]> = await api.get('/company')
      setCompanies(response.data)
    } catch (error) {
      console.log('getConmpanies', error)
    }
  }

  return (
    <DataContext.Provider value={{ company: { companies, getCompanies } }}>
      {children}
    </DataContext.Provider>
  )
}

export const useContextData = () => useContext(DataContext)

import { AxiosResponse } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../helpers/api'
import {
  ICompany,
  IDataContext,
  IMainNumbers
} from '../interfaces/contextData.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const DataContext = createContext<IDataContext | {}>({})

export function ContextDataProvider({ children }: IAllProvidersProps) {
  const [companies, setCompanies] = useState<ICompany[]>()
  const [mainNumbers, setMainNumbers] = useState<IMainNumbers>()

  const getCompanies = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ICompany[]> = await api.get('/company')
      setCompanies(response.data)
    } catch (error) {
      console.log('getConmpanies', error)
    }
  }

  const getMainNumbers = async (id: string): Promise<void> => {
    try {
      const response: AxiosResponse<IMainNumbers> = await api.get(
        `/company/main-numbers/${id}`
      )
      setMainNumbers(response.data)
    } catch (error) {
      console.log('mainNumbers', error)
    }
  }

  return (
    <DataContext.Provider
      value={{
        company: { companies, getCompanies, mainNumbers, getMainNumbers }
      }}>
      {children}
    </DataContext.Provider>
  )
}

export const useContextData = () => useContext(DataContext)

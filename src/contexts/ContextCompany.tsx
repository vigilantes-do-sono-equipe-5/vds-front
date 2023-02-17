import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import {
  IChosenGoals,
  ICompany,
  ICompanyContext,
  IMainNumbers
} from '../interfaces/contextCompany.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const defaultValue = {}
const ContextCompany = createContext(defaultValue as ICompanyContext)

export function ContextCompanyProvider({ children }: IAllProvidersProps) {
  const [companies, setCompanies] = useState([] as ICompany[])
  const [mainNumbers, setMainNumbers] = useState(defaultValue as IMainNumbers)
  const [chosenGoals, setChosenGoals] = useState(defaultValue as IChosenGoals)

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

  const getChosenGoals = async (id: string): Promise<void> => {
    try {
      const response: AxiosResponse<IChosenGoals> = await api.get(
        `/company/chosenGoals/${id}`
      )
      setChosenGoals(response.data)
    } catch (error) {
      console.log('mainNumbers', error)
    }
  }

  return (
    <ContextCompany.Provider
      value={{
        companyStates: {
          companies,
          mainNumbers,
          chosenGoals
        },
        companyFunctions: {
          getCompanies,
          getMainNumbers,
          getChosenGoals
        }
      }}>
      {children}
    </ContextCompany.Provider>
  )
}

export const useContextCompany = () => useContext(ContextCompany)

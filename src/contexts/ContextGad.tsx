import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import { IAverageGad, IContextGad } from '../interfaces/contextGad.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const ContextGad = createContext<IContextGad | {}>({})

export function ContextGadProvider({ children }: IAllProvidersProps) {
  const [averageGad, setAverageGad] = useState<IAverageGad>()

  const getAverageGad = async (
    id: string,
    startDate: string,
    finalDate: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse<IAverageGad> = await api.get(`/gad/${id}`, {
        params: { startDate, finalDate }
      })
      setAverageGad(response.data)
    } catch (error) {
      console.log('getAverageGad', error)
    }
  }

  return (
    <ContextGad.Provider
      value={{
        gadStates: { averageGad },
        gadFunctions: { getAverageGad }
      }}>
      {children}
    </ContextGad.Provider>
  )
}

export const useContextGad = () => useContext(ContextGad)

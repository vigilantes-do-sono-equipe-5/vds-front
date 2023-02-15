import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import { IAveragePhq, IContextPhq } from '../interfaces/contextPhq.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const ContextPhq = createContext<IContextPhq | {}>({})

export function ContextPhqProvider({ children }: IAllProvidersProps) {
  const [averagePhq, setAveragePhq] = useState<IAveragePhq>()

  const getAveragePhq = async (
    id: string,
    startDate: string,
    finalDate: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse<IAveragePhq> = await api.get(`/phq/${id}`, {
        params: { startDate, finalDate }
      })
      setAveragePhq(response.data)
    } catch (error) {
      console.log('getAveragePhq', error)
    }
  }

  return (
    <ContextPhq.Provider
      value={{
        phqStates: { averagePhq },
        phqFunctions: { getAveragePhq }
      }}>
      {children}
    </ContextPhq.Provider>
  )
}

export const useContextPhq = () => useContext(ContextPhq)

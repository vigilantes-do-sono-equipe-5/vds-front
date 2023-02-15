import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import { IAverageIsi, IContextIsi } from '../interfaces/contextIsi.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const ContextIsi = createContext<IContextIsi | {}>({})

export function ContextIsiProvider({ children }: IAllProvidersProps) {
  const [averageIsi, setAverageIsi] = useState<IAverageIsi>()

  const getAverageIsi = async (
    id: string,
    startDate: string,
    finalDate: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse<IAverageIsi> = await api.get(`/isi/${id}`, {
        params: { startDate, finalDate }
      })
      setAverageIsi(response.data)
    } catch (error) {
      console.log('getAverageIsi', error)
    }
  }
  return (
    <ContextIsi.Provider
      value={{
        isiStates: { averageIsi },
        isiFunctions: { getAverageIsi }
      }}>
      {children}
    </ContextIsi.Provider>
  )
}

export const useContextIsi = () => useContext(ContextIsi)

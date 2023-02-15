import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'
import {
  IContextSleepDiaries,
  IInterferenceAndTechniques
} from '../interfaces/contextSleepDiaries.interfaces'

const ContextSleepDiaries = createContext<IContextSleepDiaries | {}>({})

export function ContextSleepDiariesProvider({ children }: IAllProvidersProps) {
  const [interferenceAndTechniques, setInterferenceAndTechniques] =
    useState<IInterferenceAndTechniques>()

  const getInterferenceAndTechniques = async (id: string): Promise<void> => {
    try {
      const response: AxiosResponse<IInterferenceAndTechniques> = await api.get(
        `/interferenceAndTechniques/${id}`
      )
      setInterferenceAndTechniques(response.data)
    } catch (error) {
      console.log('getInterferenceAndTechniques', error)
    }
  }

  return (
    <ContextSleepDiaries.Provider
      value={{
        sleepDiariesStates: { interferenceAndTechniques },
        sleepDiariesFunctions: { getInterferenceAndTechniques }
      }}>
      {children}
    </ContextSleepDiaries.Provider>
  )
}

export const useContextSleepDiaries = () => useContext(ContextSleepDiaries)

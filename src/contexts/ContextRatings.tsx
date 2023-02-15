import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from '../helpers/api'
import {
  IRatings,
  IContextRatings
} from '../interfaces/contextRatings.interfaces'
import { IAllProvidersProps } from '../interfaces/contexts.interfaces'

const ContextRatings = createContext<IContextRatings | {}>({})

export function ContextRatingsProvider({ children }: IAllProvidersProps) {
  const [ratings, setRatings] = useState<IRatings>()

  const getRatings = async (
    id: string,
    startDate: string,
    finalDate: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse<IRatings> = await api.get(
        `/ratings/${id}`,
        {
          params: { startDate, finalDate }
        }
      )
      setRatings(response.data)
    } catch (error) {
      console.log('getAverageRatings', error)
    }
  }

  return (
    <ContextRatings.Provider
      value={{
        ratingsStates: { ratings },
        ratingsFunctions: { getRatings }
      }}>
      {children}
    </ContextRatings.Provider>
  )
}

export const useContextRatings = () => useContext(ContextRatings)

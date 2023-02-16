export interface IAverageGad {
  beginningAverageGad: number
  middleAverageGad: number
  endAverageGad: number
}

export interface IContextGad {
  gadStates: { averageGad: IAverageGad | undefined }
  gadFunctions: {
    getAverageGad: (
      id: string,
      startDate: string,
      finalDate: string
    ) => Promise<void>
  }
}

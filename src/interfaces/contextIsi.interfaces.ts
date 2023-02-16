export interface IAverageIsi {
  beginningAverageIsi: number
  middleAverageIsi: number
  endAverageIsi: number
}
export interface IContextIsi {
  isiStates: { averageIsi: IAverageIsi | undefined }
  isiFunctions: {
    getAverageIsi: (
      id: string,
      startDate: string,
      finalDate: string
    ) => Promise<void>
  }
}

export interface IAveragePhq {
  beginningAveragePhq: number
  middleAveragePhq: number
  endAveragePhq: number
}
export interface IContextPhq {
  phqStates: { averagePhq: IAveragePhq | undefined }
  phqFunctions: {
    getAveragePhq: (
      id: string,
      startDate: string,
      finalDate: string
    ) => Promise<void>
  }
}

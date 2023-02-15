export interface IAverageIsi {
  beginningAverageIsi: number
  middleAverageIsi: number
  endAverageIsi: number
}
export interface IContextIsi {
  gadStates: { averageIsi: IAverageIsi }
  gadFunctions: { getAverageIsi: () => Promise<void> }
}

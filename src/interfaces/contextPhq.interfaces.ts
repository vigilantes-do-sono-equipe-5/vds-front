export interface IAveragePhq {
  beginningAveragePhq: number
  middleAveragePhq: number
  endAveragePhq: number
}
export interface IContextPhq {
  gadStates: { averagePhq: IAveragePhq }
  gadFunctions: { getAveragePhq: () => Promise<void> }
}

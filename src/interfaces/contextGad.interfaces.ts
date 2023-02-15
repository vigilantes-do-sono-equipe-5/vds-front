export interface IAverageGad {
  beginningAverageGad: number
  middleAverageGad: number
  endAverageGad: number
}

export interface IContextGad {
  gadStates: { averageGad: IAverageGad }
  gadFunctions: { getIAverageGad: () => Promise<void> }
}

export interface IRatings {
  1: number
  2: number
  3: number
  4: number
  5: number
}

export interface IContextRatings {
  gadStates: { averageRatings: IRatings }
  gadFunctions: { getAverageRatings: () => Promise<void> }
}

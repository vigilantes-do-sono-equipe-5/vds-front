export interface IRatings {
  1: number
  2: number
  3: number
  4: number
  5: number
}

export interface IContextRatings {
  ratingsStates: { ratings: IRatings | undefined }
  ratingsFunctions: {
    getRatings: (
      id: string,
      startDate: string,
      finalDate: string
    ) => Promise<void>
  }
}

export interface IData {
  name: string
  percent: number
  color: string
}

export interface IChartData {
  labels: string[]
  datasets: {
    barThickness?: number
    label: string
    data: number[]
    backgroundColor: string[]
  }
}

export interface IData {
  name: string
  percent: number
  color: string
}
export interface ILineData {
  id: string
  name: string
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

import { useState, useEffect } from 'react'
import LineChart from '../LineChart'
import { Chart, ChartContainer } from './styled'

export default function IsiGadPhq(data: {
  labels: string[]
  datasets: Array<{
    label: string
    barThickness?: number
    data: number[]
    backgroundColor: string | string[]
    borderColor?: string
    borderWidth?: number
  }>
}) {
  const [dataChart, setDataChart] = useState(data)

  useEffect(() => setDataChart(data), [data])
  return (
    <ChartContainer>
      <Chart>
        <LineChart labels={dataChart.labels} datasets={dataChart.datasets} />
      </Chart>
    </ChartContainer>
  )
}

import { Chart as ChartJS, PointElement } from 'chart.js'
import 'chart.js/auto'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(PointElement)

export default function LineChart(data: {
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
    <Line
      data={dataChart}
      width={100}
      height={50}
      options={{
        aspectRatio: 2,
        responsive: true,
        layout: { autoPadding: true },
        plugins: {
          title: {
            display: true
          },
          legend: {
            display: false
          }
        }
      }}
    />
  )
}

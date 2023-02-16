import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'

import { Bar } from 'react-chartjs-2'
import { IChartData } from '../../../interfaces/Chart.interface'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
export default function BarChart({ labels, datasets }: IChartData) {
  const [chart, setChart] = useState<string[]>()
  const [number, setNumber] = useState<number[]>()
  const [color, setColor] = useState<string[]>()

  useEffect(() => {
    setChart(labels)
    setNumber(datasets.data)
    setColor(datasets.backgroundColor)
  }, [chart, number, color, labels, datasets.data, datasets.backgroundColor])

  console.log(chart)

  const formatData = {
    labels: chart,
    datasets: [
      {
        barThickness: 30,
        label: datasets.label,
        data: number,
        backgroundColor: color
      }
    ]
  }

  return (
    <Bar
      data={formatData}
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

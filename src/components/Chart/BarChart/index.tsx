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

interface IBarChart {
  labels: string[]
  datasets: [
    {
      barThickness: number
      label?: string
      data: number[]
      backgroundColor: string[]
    }
  ]
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
export default function BarChart({ labels, datasets }: IChartData) {
  const [formatData, setFormatData] = useState<IBarChart>({
    labels,
    datasets: [
      {
        barThickness: 30,
        label: datasets.label,
        data: datasets.data,
        backgroundColor: datasets.backgroundColor
      }
    ]
  })

  useEffect(() => {
    setFormatData({
      labels,
      datasets: [
        {
          barThickness: 30,
          label: datasets.label,
          data: datasets.data,
          backgroundColor: datasets.backgroundColor
        }
      ]
    })
  }, [labels, datasets])

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

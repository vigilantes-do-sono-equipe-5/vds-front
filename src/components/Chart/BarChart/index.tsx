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
import { IData } from '../../../interfaces/Chart.interface'

interface IChartData {
  type: string
  labels: string[]
  datasets: [
    {
      barThickness: number
      label: string
      data: number[]
      backgroundColor: string[]
      borderColor: string
      borderWidth: number
    }
  ]
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
export default function BarChart({ data }: { data: IData[] }) {
  const chartDataFunction = () => {
    return {
      type: 'bar',
      labels: Array.from(data).map(el => el.name),
      datasets: [
        {
          barThickness: 55,
          label: '',
          data: Array.from(data).map(el => el.percent),
          backgroundColor: Array.from(data).map(el => el.color),
          borderColor: 'black',
          borderWidth: 1
        }
      ]
    }
  }
  return (
    <Bar
      data={chartDataFunction()}
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

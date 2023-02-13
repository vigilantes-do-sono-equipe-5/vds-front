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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
export default function BarChart({ data }: { data: IData[] }) {
  const [chart, setChart] = useState<string[]>()
  const [number, setNumber] = useState<number[]>()
  const [color, setColor] = useState<string[]>()

  useEffect(() => {
    const name = Array.from(data).map(el => el.name)
    setChart(name)
    const datas = Array.from(data).map(el => el.percent)
    setNumber(datas)
    const colors = Array.from(data).map(el => el.color)
    setColor(colors)
  }, [])

  const chartData = {
    labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
    datasets: [
      {
        barThickness: 30,
        label: 'Avaliações',
        data: number,
        backgroundColor: color
      }
    ]
  }

  return (
    <Bar
      data={chartData}
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

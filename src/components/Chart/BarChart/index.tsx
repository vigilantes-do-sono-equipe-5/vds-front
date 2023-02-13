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
  console.log(data)

  useEffect(() => {
    const name = Array.from(data).map(el => el.name)
    setChart(name)
    const datas = Array.from(data).map(el => el.percent)
    setNumber(datas)
    const colors = Array.from(data).map(el => el.color)
    setColor(colors)
  }, [])

  const chartData = {
    labels: ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5', 'dia 6', 'dia 7'],
    datasets: [
      {
        barThickness: 55,
        label: chart,
        data: number,
        backgroundColor: color,
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  console.log(chart)

  return (
    <Bar
      // @ts-expect-error
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

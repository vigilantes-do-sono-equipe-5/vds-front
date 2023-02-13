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
  const [chartData, setChartData] = useState<number[]>()
  const [chartColor, setChartColor] = useState<string[]>()

  useEffect(() => {
    const datas = Array.from(data).map(el => el.percent)
    setChartData(datas)
    const colors = Array.from(data).map(el => el.color)
    setChartColor(colors)
  }, [])

  const formatData = {
    labels: ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5', 'dia 6', 'dia 7'],
    datasets: [
      {
        barThickness: 55,
        label: 'label',
        data: chartData,
        backgroundColor: chartColor,
        borderColor: 'black',
        borderWidth: 1
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

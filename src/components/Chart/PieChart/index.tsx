import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { IChartData } from '../../../interfaces/Chart.interface'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart(data: IChartData) {
  const [formatData, setFormatData] = useState<{
    labels?: string[] | undefined
    datasets: [
      {
        barThickness?: number | undefined
        label: string
        data: number[]
        backgroundColor: string[]
      }
    ]
  }>({
    labels: data.labels,
    datasets: [
      {
        label: data.datasets.label,
        data: data.datasets.data,
        backgroundColor: ['green', 'blue']
      }
    ]
  })

  useEffect(() => {
    setFormatData({
      labels: data.labels,
      datasets: [
        {
          label: data.datasets.label,
          data: data.datasets.data,
          backgroundColor: ['green', 'blue']
        }
      ]
    })
    console.log('pie', formatData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return (
    <Pie
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

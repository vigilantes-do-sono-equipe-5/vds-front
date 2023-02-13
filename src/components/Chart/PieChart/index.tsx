import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const formatData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'Usuários ativos',
        data: [60, 40],
        backgroundColor: ['green', 'blue']
      }
    ]
  }
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

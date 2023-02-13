import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const formatData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'My Data',
        data: [5, 10, 15, 20, 25, 25],
        backgroundColor: [
          'red',
          'yellow ',
          'orange',
          'green',
          'blue',
          'indigo'
        ],
        borderColor: 'black',
        borderWidth: 1
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

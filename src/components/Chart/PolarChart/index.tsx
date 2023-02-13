import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function PolarChart() {
  const formatData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'My Data',
        data: ['5', '10', '15', '20', '25', '25'],
        backgroundColor: [
          'red',
          'yellow ',
          'orange',
          'green',
          'blue',
          'indigo'
        ],
        borderColor: 'black'
      }
    ]
  }
  return (
    <PolarArea
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

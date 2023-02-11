import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export const PolarChart = () => {
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
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }
  return (
    <PolarArea
      data={formatData}
      options={{
        aspectRatio: 2,
        responsive: true,
        layout: { padding: { left: 30, right: 30, top: 40, bottom: 20 } },
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

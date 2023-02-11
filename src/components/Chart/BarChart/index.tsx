import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const BarChart = () => {
  const formatData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        barThickness: 55,
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
    <Bar
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

export default BarChart

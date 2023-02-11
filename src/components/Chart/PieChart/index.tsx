import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = () => {
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
    <Pie
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

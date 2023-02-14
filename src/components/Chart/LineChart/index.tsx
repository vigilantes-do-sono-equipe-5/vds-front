import { Chart as ChartJS, PointElement } from 'chart.js'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

ChartJS.register(PointElement)

export default function LineChart() {
  const formatData = {
    labels: ['', '', '', '', ''],
    datasets: [
      {
        label: 'ISI',
        barThickness: 50,
        data: [9, 18, 5, 12, 18, 7, 32],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'GAD',
        barThickness: 50,
        data: [6, 18, 9, 5, 6, 7, 32],
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'PHQ',
        barThickness: 50,
        data: [4, 18, 13, 7, 5, 21, 32],
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  return (
    <Line
      data={formatData}
      width={100}
      height={50}
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

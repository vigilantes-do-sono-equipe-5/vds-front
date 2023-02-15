import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import BarChart from '../BarChart'
import Buttons from '../Buttons'
import PieChart from '../PieChart'
import PolarChart from '../PolarChart'
import { BoxButtons, BoxChart, ChartContainer, ChartDiv, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const data = {
  labels: ['Energia', 'Concentração', 'Humor', 'Relacionamento'],
  datasets: {
    barThickness: 30,
    label: 'Rating',
    data: [40, 80, 30, 50],
    backgroundColor: ['blue', 'red', 'green', 'yellow']
  }
}
export default function AverageChart() {
  useEffect(() => {}, [])

  const [chartType, setChartType] = useState('bar')

  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <BoxChart>
          {chartType === 'bar' && (
            <BarChart labels={data.labels} datasets={data.datasets} />
          )}
          {chartType === 'pie' && <PieChart />}
          {chartType === 'polar' && <PolarChart />}
        </BoxChart>
        <h3>Gráficos</h3>
        <BoxButtons>
          <Buttons name={'Barra'} change={() => setChartType('bar')} />
          <Buttons name={'Pizza'} change={() => setChartType('pie')} />
          <Buttons name={'Polar'} change={() => setChartType('polar')} />
        </BoxButtons>
      </ChartDiv>
    </ChartContainer>
  )
}

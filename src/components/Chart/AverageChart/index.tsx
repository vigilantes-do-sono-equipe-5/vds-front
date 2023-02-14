import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect } from 'react'
import BarChart from '../BarChart'
import Buttons from '../Buttons'
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
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <BoxChart>
          <BarChart labels={data.labels} datasets={data.datasets} />
        </BoxChart>
        <h3>Gráficos</h3>
        <BoxButtons>
          <Buttons name={'Barra'} />
          <Buttons name={'Pizza'} />
          <Buttons name={'Polar'} />
        </BoxButtons>
      </ChartDiv>
    </ChartContainer>
  )
}

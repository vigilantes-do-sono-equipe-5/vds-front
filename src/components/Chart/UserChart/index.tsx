import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect } from 'react'
import PieChart from '../PieChart'
import { BoxChart, Container, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function UserChart() {
  useEffect(() => {}, [])
  return (
    <Container>
      <Title>Usuários na semana</Title>
      <BoxChart>
        <PieChart />
      </BoxChart>
    </Container>
  )
}

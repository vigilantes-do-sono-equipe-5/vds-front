import Chart from '../../components/Chart'
import { LineChart } from '../../components/Chart/LineChart'
import { Container } from './styled'

export default function Home() {
  return (
    <Container>
      <Chart />
      <LineChart />
    </Container>
  )
}

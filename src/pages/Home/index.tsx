import Calendar from '../../components/Calendar'
import Chart from '../../components/Chart'
import { Container } from './styled'

export default function Home() {
  return (
    <Container>
      <Calendar />
      <Chart />
    </Container>
  )
}

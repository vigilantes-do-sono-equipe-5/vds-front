import Logo from '../../assets/Logo'
import Calendary from '../../components/Calendary'
import Chart from '../../components/Chart'
import { Container } from './styled'

export default function Home() {
  return (
    <Container>
      Home
      <Logo />
      <Calendary />
      <Chart />
    </Container>
  )
}

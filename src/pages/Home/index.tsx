// import Calendar from '../../components/Calendar'
// import Chart from '../../components/Chart'
import ConfigDashboard from '../../components/ConfigDashboard'
import Assessments from '../../components/DashBoards/Assessments'
import MainNumbers from '../../components/DashBoards/MainNumbers'
import { Container } from './styled'

export default function Home() {
  const switchComponent = false
  return (
    <Container>
      {/* <Calendar />
      <Chart /> */}
      {switchComponent && <ConfigDashboard />}
      {switchComponent && <MainNumbers />}
      <Assessments />
    </Container>
  )
}

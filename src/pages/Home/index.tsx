import ConfigDashboard from '../../components/ConfigDashboard'
import Assessments from '../../components/DashBoards/Assessments'
import MainNumbers from '../../components/DashBoards/MainNumbers'
import { Container } from './styled'

export default function Home() {
  const switchComponent = false
  return (
    <Container>
      {switchComponent && <ConfigDashboard />}
      {!switchComponent && <MainNumbers />}
      {!switchComponent && <Assessments />}
    </Container>
  )
}

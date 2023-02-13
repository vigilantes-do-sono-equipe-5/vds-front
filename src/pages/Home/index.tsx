import Calendar from '../../components/Calendar'
import AverageChart from '../../components/Chart/AverageChart'
import RatingChart from '../../components/Chart/RatingChart'
import ReportChart from '../../components/Chart/ReportChart'
import UserChart from '../../components/Chart/UserChart'
import { IChartData } from '../../interfaces/Chart.interface'
import {
  BottomBox,
  BoxChart,
  BoxInfo,
  ChartDepre,
  ChartUsers,
  Client,
  Container,
  MediaGeral,
  MiddleBox,
  TopBox
} from './styled'

const data: IChartData = {
  labels: ['total'],
  datasets: {
    label: 'total',
    data: [500],
    backgroundColor: ['blue']
  }
}
export default function Home() {
  return (
    <Container>
      <Client name='empresas'>
        <option value='Empresa 1'>Empresa 1</option>
        <option value='Empresa 2'>Empresa 2</option>
      </Client>
      <TopBox>
        <BoxChart>
          <UserChart />
        </BoxChart>
        <BoxChart>
          <RatingChart />
        </BoxChart>
        <ChartUsers>
          <Calendar />
        </ChartUsers>
      </TopBox>
      <MiddleBox>
        <BoxInfo>
          <ReportChart name='Total de sessões feitas' data={data} />
        </BoxInfo>
        <BoxInfo>
          <ReportChart name='Noites de sono reportadas' data={data} />
        </BoxInfo>
        <BoxInfo>
          <ReportChart name='Técnicas aplicadas' data={data} />
        </BoxInfo>
      </MiddleBox>
      <BottomBox>
        <MediaGeral>
          <AverageChart />
        </MediaGeral>
        <ChartDepre>Depre</ChartDepre>
      </BottomBox>
    </Container>
  )
}

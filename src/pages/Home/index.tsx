import Calendar from '../../components/Calendar'
import {
  BottomBox,
  BoxChart,
  ChartUsers,
  Client,
  Container,
  TopBox
} from './styled'

export default function Home() {
  return (
    <Container>
      <Client name='empresas'>
        <option value='Empresa 1'>Empresa 1</option>
      </Client>
      <TopBox>
        <ChartUsers>
          <Calendar />
        </ChartUsers>
        <BoxChart>Usuarios ativos</BoxChart>
        <BoxChart>Média das sessões</BoxChart>
      </TopBox>

      <BottomBox>
        Metas
        <div></div>
      </BottomBox>
    </Container>
  )
}

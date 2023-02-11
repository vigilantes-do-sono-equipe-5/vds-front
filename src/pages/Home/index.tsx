import Calendar from '../../components/Calendar'
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

export default function Home() {
  return (
    <Container>
      <Client name='empresas'>
        <option value='Empresa 1'>Empresa 1</option>
        <option value='Empresa 2'>Empresa 2</option>
      </Client>
      <TopBox>
        <BoxChart>Usuarios ativos</BoxChart>
        <BoxChart>Média das sessões</BoxChart>
        <ChartUsers>
          <Calendar />
        </ChartUsers>
      </TopBox>
      <MiddleBox>
        <BoxInfo>Total</BoxInfo>
        <BoxInfo>média</BoxInfo>
        <BoxInfo>sessão</BoxInfo>
      </MiddleBox>
      <BottomBox>
        <MediaGeral>Metas</MediaGeral>
        <ChartDepre>Depre</ChartDepre>
      </BottomBox>
    </Container>
  )
}

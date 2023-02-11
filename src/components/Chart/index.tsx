// import { v4 as uuidv4 } from 'uuid'
import { Menu } from './BarChart/Menu'
import {
  ChartContainer,
  ChartDiv,
  Dash,
  SelectTimeButton,
  Time,
  Title
} from './styled'
import { BarChart } from './BarChart'

export default function Chart(): JSX.Element {
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <Menu />
        <BarChart />
        <Time>
          <h2>GRÁFICO</h2>
          <SelectTimeButton>
            <Dash />
            <h3>Barra</h3>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <h3>Pizza</h3>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <h3>Polar</h3>
          </SelectTimeButton>
        </Time>
      </ChartDiv>
    </ChartContainer>
  )
}

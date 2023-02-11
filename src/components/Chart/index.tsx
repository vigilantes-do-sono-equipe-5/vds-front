// import { v4 as uuidv4 } from 'uuid'
import { Menu } from './Menu'
import {
  ChartContainer,
  ChartDiv,
  Dash,
  SelectTimeButton,
  Time,
  Title
} from './styled'
import { BarChart } from './BarChart'
import { PolarChart } from './PolarChart'

export default function Chart(): JSX.Element {
  interface IOptions {
    id: string
    name: string
  }
  const ChartOptions: IOptions[] = [
    { id: 'Abc1', name: 'Barra' },
    { id: 'Abc2', name: 'Pizza' },
    { id: 'Abc3', name: 'Polar' }
  ]
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <Menu />
        <BarChart />
        <PolarChart />
        <Time>
          <h2>GRÁFICO</h2>
          {ChartOptions.map(el => (
            <SelectTimeButton key={el.id}>
              <Dash />
              <h3>{el.name}</h3>
            </SelectTimeButton>
          ))}
        </Time>
      </ChartDiv>
    </ChartContainer>
  )
}

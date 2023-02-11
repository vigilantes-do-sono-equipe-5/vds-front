import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { BarChart } from './BarChart'
import Menu from './Menu'
import {
  ChartContainer,
  ChartDiv,
  Dash,
  SelectTimeButton,
  Time,
  Title
} from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

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

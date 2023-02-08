import { Container } from './styled'
import ChartComponent, { IData } from '../../components/Chart'

const legendData: IData[] = [
  {
    id: '1',
    name: '1',
    percent: 100,
    color: 'yellow'
  },
  {
    id: '2',
    name: '2',
    percent: 200,
    color: 'orange'
  },
  {
    id: '3',
    name: '3',
    percent: 300,
    color: 'red'
  },
  {
    id: '4',
    name: '4',
    percent: 400,
    color: 'green'
  },
  {
    id: '5',
    name: '5',
    percent: 500,
    color: 'blue'
  }
]

export default function Chart() {
  return (
    <Container>
      <ChartComponent
        legendData={legendData}
        graficName={'Gráfico de Teste'}
        switchTime={true}
      />
    </Container>
  )
}

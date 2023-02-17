import { IChartData, ILineData } from '../../../interfaces/Chart.interface'
import {
  LegendDiv,
  LineLegendDiv,
  LineNameItem,
  LineSquare,
  Name,
  NameItem,
  Square
} from './styled'

export const LegendData: IChartData = {
  labels: ['1 star', '2 star', '3 start', '4 star', '5 star'],
  datasets: {
    barThickness: 30,
    label: 'Rating',
    data: [5, 4, 8, 10, 50],
    backgroundColor: ['blue', 'red', 'green', 'yellow', 'purple']
  }
}
const dados = [
  {
    color: 'blue',
    name: 'Energia'
  },
  {
    color: 'red',
    name: 'Concentração'
  },
  {
    color: 'green',
    name: 'Humor'
  },
  {
    color: 'yellow',
    name: 'Relacionamento'
  }
]

const lineDados: ILineData[] = [
  {
    id: 'abcd1',
    name: 'ISI',
    color: 'red'
  },
  {
    id: 'abcd2',
    name: 'GAD',
    color: 'orange'
  },
  {
    id: 'abcd3',
    name: 'PHQ',
    color: 'green'
  }
]

export function ChartNames() {
  return (
    <LegendDiv>
      {dados.map((el, index) => (
        <NameItem key={index}>
          <Square color={el.color} />
          <Name>{el.name}</Name>
        </NameItem>
      ))}
    </LegendDiv>
  )
}
export function LineChartNames() {
  return (
    <LineLegendDiv>
      {lineDados.map((el, index) => (
        <LineNameItem key={index}>
          <LineSquare color={el.color} />
          <Name>{el.name}</Name>
        </LineNameItem>
      ))}
    </LineLegendDiv>
  )
}

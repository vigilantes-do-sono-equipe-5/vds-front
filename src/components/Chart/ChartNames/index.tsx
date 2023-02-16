import { IChartData } from '../../../interfaces/Chart.interface'
import { LegendDiv, Name, NameItem, Square } from './styled'

export const LegendData: IChartData = {
  labels: ['1 ⭐', '2 ⭐', '3 ⭐', '4 ⭐', '5 ⭐'],
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

export default function ChartNames() {
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

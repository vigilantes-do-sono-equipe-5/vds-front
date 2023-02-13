import { IData } from '../../../interfaces/Chart.interface'
import { LegendDiv, NameItem, Percentage, Square } from './styled'

export const LegendData: IData[] = [
  {
    name: 'Sono',
    percent: 10,
    color: 'black'
  },
  {
    name: 'Aaaa',
    percent: 10,
    color: 'orange'
  },
  {
    name: 'Bbbb',
    percent: 15,
    color: 'yellow'
  },
  {
    name: 'Cccc',
    percent: 20,
    color: 'green'
  },
  {
    name: 'Dddd',
    percent: 25,
    color: 'blue'
  },
  {
    name: 'Eeee',
    percent: 25,
    color: 'indigo'
  }
]

export default function ChartNames() {
  return (
    <LegendDiv>
      {LegendData.map((el, index) => (
        <NameItem key={index}>
          <Square color={el.color} />
          <Percentage>
            {el.name} {el.percent}%
          </Percentage>
        </NameItem>
      ))}
    </LegendDiv>
  )
}

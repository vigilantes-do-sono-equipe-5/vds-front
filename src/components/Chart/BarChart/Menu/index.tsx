import { LegendDiv, LegendItem, Square, Percentage } from './styled'

export const Menu = () => {
  interface IData {
    id: string
    name: string
    percent: number
    color: string
  }
  const LegendData: IData[] = [
    {
      id: 'abcd1',
      name: 'Sono',
      percent: 5,
      color: 'red'
    },
    {
      id: 'abcd2',
      name: 'Aaaa',
      percent: 10,
      color: 'orange'
    },
    {
      id: 'abcd3',
      name: 'Bbbb',
      percent: 15,
      color: 'yellow'
    },
    {
      id: 'abcd4',
      name: 'Cccc',
      percent: 20,
      color: 'green'
    },
    {
      id: 'abcd5',
      name: 'Dddd',
      percent: 25,
      color: 'blue'
    },
    {
      id: 'abcd6',
      name: 'Eeee',
      percent: 25,
      color: 'indigo'
    }
  ]
  return (
    <LegendDiv>
      {LegendData.map(el => (
        <LegendItem key={el.id}>
          <Square color={el.color} />
          <Percentage>
            {el.name} {el.percent}%
          </Percentage>
        </LegendItem>
      ))}
    </LegendDiv>
  )
}

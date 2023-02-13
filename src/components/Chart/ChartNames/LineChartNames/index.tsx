import { LegendDiv, NameItem, Name, Square } from '../styled'

export default function LineChartNames() {
  interface IData {
    id: string
    name: string
    color: string
  }

  const MenuData: IData[] = [
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
  return (
    <LegendDiv>
      {MenuData.map(el => (
        <NameItem key={el.id}>
          <Square color={el.color} />
          <Name>{el.name}</Name>
        </NameItem>
      ))}
    </LegendDiv>
  )
}

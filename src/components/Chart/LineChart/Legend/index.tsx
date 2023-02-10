import { LegendDiv, Square, Title, LegendItem } from './styled'

export const Legend = () => {
  interface IData {
    id: string
    name: string
    color: string
  }

  const LegendData: IData[] = [
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
      {LegendData.map(el => (
        <LegendItem key={el.id}>
          <Square color={el.color} />
          <Title>{el.name}</Title>
        </LegendItem>
      ))}
    </LegendDiv>
  )
}

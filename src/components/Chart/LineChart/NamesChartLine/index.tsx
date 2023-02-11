import { MenuDiv, MenuItem, Square, Title } from './styled'

const NamesChartLine = () => {
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
    <MenuDiv>
      {MenuData.map(el => (
        <MenuItem key={el.id}>
          <Square color={el.color} />
          <Title>{el.name}</Title>
        </MenuItem>
      ))}
    </MenuDiv>
  )
}

export default NamesChartLine

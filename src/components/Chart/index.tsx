// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import {
  Square,
  ChartContainer,
  ChartDiv,
  Dash,
  LegendItem,
  LegendDiv,
  Percentage,
  SelectTimeButton,
  Time,
  Title
} from './styled'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function Chart(): JSX.Element {
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

  // Função para enviar os datos formatados para o gráfico do jeito que ele pede com as labels e os datasets
  const formatData = (data: IData[]) => {
    const labels = ['', '', '', '', '', '']
    const datasets = [
      {
        barThickness: 50,
        label: 'My Data',
        data: data.map(item => item.percent),
        backgroundColor: data.map(item => item.color),
        borderColor: 'black',
        borderWidth: 1
      }
    ]
    return { labels, datasets }
  }

  const [toggle, setToggle] = useState(true)
  const [btnColor, setBtnColor] = useState('#ffffff')
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleCheckboxChange = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  useEffect(() => {
    setBtnColor(state => (toggle ? '#ffffff' : '#aea0f8'))
  }, [toggle])

  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <LegendDiv>
          {LegendData.map(el => (
            <LegendItem key={el.id}>
              <input
                checked={selectedItems.includes(el.id)}
                onChange={() => handleCheckboxChange(el.id)}
                type='checkbox'
              />

              <Square color={el.color} />
              <Percentage>
                {el.name} {el.percent}%
              </Percentage>
            </LegendItem>
          ))}
        </LegendDiv>
        F
        <Bar
          data={formatData(
            LegendData.filter(item => selectedItems.includes(item.id))
          )}
          options={{
            aspectRatio: 2,
            responsive: true,
            layout: { padding: { right: 10 } },
            plugins: {
              title: {
                display: true
              },
              legend: {
                display: false
              }
            }
          }}
        />
        <Time>
          <Title>GRÁFICO</Title>
          <SelectTimeButton
            color={btnColor}
            onClick={e => {
              setToggle(state => !state)
            }}>
            <Dash />
            <span>Barra</span>
          </SelectTimeButton>
          <SelectTimeButton
            color={btnColor}
            onClick={e => {
              setToggle(state => !state)
            }}>
            <Dash />
            <span>Pizza</span>
          </SelectTimeButton>
          <SelectTimeButton
            color={btnColor}
            onClick={e => {
              setToggle(state => !state)
            }}>
            <Dash />
            <span>Polar</span>
          </SelectTimeButton>
        </Time>
      </ChartDiv>
    </ChartContainer>
  )
}

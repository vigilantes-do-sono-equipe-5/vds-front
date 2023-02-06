import { v4 as uuidv4 } from 'uuid'
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
      id: uuidv4(),
      name: 'Sono',
      percent: 5,
      color: 'red'
    },
    {
      id: uuidv4(),
      name: 'Sono',
      percent: 10,
      color: 'orange'
    },
    {
      id: uuidv4(),
      name: 'Sono',
      percent: 15,
      color: 'yellow'
    },
    {
      id: uuidv4(),
      name: 'Sono',
      percent: 20,
      color: 'green'
    },
    {
      id: uuidv4(),
      name: 'Sono',
      percent: 25,
      color: 'blue'
    },
    {
      id: uuidv4(),
      name: 'Sono',
      percent: 25,
      color: 'indigo'
    }
  ]

  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        barThickness: 50,
        label: 'Sono',
        data: [5, 10, 15, 20, 25, 25],
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const [toggle, setToggle] = useState(true)
  const [btnColor, setBtnColor] = useState('#ffffff')

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
              <Square color={el.color} />
              <Percentage>
                {el.name} {el.percent}%
              </Percentage>
            </LegendItem>
          ))}
        </LegendDiv>
        F
        <Bar
          data={data}
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

/* eslint-disable react/jsx-no-bind */
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

export default function Chart() {
  interface IData {
    name: string
    percent: number
    color: string
  }
  const Data: IData[] = [
    {
      name: 'Sono',
      percent: 5,
      color: 'red'
    },
    {
      name: 'Sono',
      percent: 10,
      color: 'orange'
    },
    {
      name: 'Sono',
      percent: 15,
      color: 'yellow'
    },
    {
      name: 'Sono',
      percent: 20,
      color: 'green'
    },
    {
      name: 'Sono',
      percent: 25,
      color: 'blue'
    },
    {
      name: 'Sono',
      percent: 25,
      color: 'indigo'
    }
  ]

  const ChartData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: ['Sono'],
        data: [5, 10, 15, 20, 25, 25],
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const options = {}

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
          {Data.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <LegendItem key={index}>
              <Square color={el.color} />
              <Percentage>
                {el.name} {el.percent}%
              </Percentage>
            </LegendItem>
          ))}
        </LegendDiv>

        <Bar data={ChartData} options={options} />

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

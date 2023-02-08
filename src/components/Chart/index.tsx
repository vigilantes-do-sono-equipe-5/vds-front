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

export interface IData {
  id: string
  name: string
  percent: number
  color: string
}

interface IProps {
  legendData: IData[]
  graficName: string
  switchTime: boolean
}
export default function Chart({
  legendData,
  graficName,
  switchTime
}: IProps): JSX.Element {
  const backgroundColor = legendData.map(e => e.color)
  const labels = legendData.map(e => e.name)
  const valueGrafic = legendData.map(e => e.percent)
  const data = {
    labels,
    datasets: [
      {
        barThickness: 50,
        label: 'teste',
        data: valueGrafic,
        backgroundColor,
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
      <Title>{graficName}</Title>
      <ChartDiv>
        <LegendDiv>
          {legendData.map((el: IData) => (
            <LegendItem key={el.id}>
              <Square color={el.color} />
              <Percentage>
                {''} {el.percent}
              </Percentage>
            </LegendItem>
          ))}
        </LegendDiv>

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
        {switchTime && (
          <Time>
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
        )}
      </ChartDiv>
    </ChartContainer>
  )
}

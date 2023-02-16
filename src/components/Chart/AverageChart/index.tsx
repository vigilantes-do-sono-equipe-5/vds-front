import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import BarChart from '../BarChart'
import Buttons from '../Buttons'
import { BoxButtons, BoxChart, ChartContainer, ChartDiv, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function AverageChart({
  name,
  data
}: {
  name: string[]
  data: {
    barThickness?: number | undefined
    label: string
    data: number[]
    backgroundColor: string[]
  }
}) {
  const [nameChart, setNameChart] = useState(name)
  const [dataChart, setDataChart] = useState(data)
  data.barThickness = 30

  useEffect(() => {
    setNameChart(name)
    setDataChart(data)
  }, [name, data])
  useEffect(() => {}, [])
  return (
    <ChartContainer>
      <Title>Objetivos escolhidos</Title>
      <ChartDiv>
        <BoxChart>
          <BarChart labels={nameChart} datasets={dataChart} />
        </BoxChart>
        <h3>Gráficos</h3>
        <BoxButtons>
          <Buttons name={'Barra'} />
          <Buttons name={'Pizza'} />
          <Buttons name={'Polar'} />
        </BoxButtons>
      </ChartDiv>
    </ChartContainer>
  )
}

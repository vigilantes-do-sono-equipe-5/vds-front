import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect } from 'react'
import BarChart from '../BarChart'
import { LegendData } from '../ChartNames'
import { BoxChart, ChartContainer, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

console.log(LegendData)

export default function AverageChart() {
  useEffect(() => {}, [])
  return (
    <ChartContainer>
      <Title>Avaliações da semana</Title>
      <BoxChart>
        <BarChart labels={LegendData.labels} datasets={LegendData.datasets} />
      </BoxChart>
    </ChartContainer>
  )
}

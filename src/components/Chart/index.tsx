import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect } from 'react'
import Buttons from './Buttons'
import ChartNames from './ChartNames'
import { BoxButtons, BoxChart, ChartContainer, ChartDiv, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function Chart({ chartName }: { chartName: string }) {
  useEffect(() => {}, [])
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <ChartNames />
        <BoxChart></BoxChart>
        <BoxButtons>
          <h3>Gráficos</h3>
          <Buttons name={'Barra'} />
          <Buttons name={'Pizza'} />
          <Buttons name={'Polar'} />
        </BoxButtons>
      </ChartDiv>
    </ChartContainer>
  )
}

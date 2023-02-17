import LineChart from '../LineChart'
import { LineChartNames } from '../ChartNames'
import { Chart, ChartDiv, ChartContainer, Title, BoxNames } from './styled'

export default function IsiGadPhq() {
  return (
    <ChartContainer>
      <Title>AVALIAÇÕES SEMANAIS</Title>
      <ChartDiv>
        <Chart>
          <LineChart />
        </Chart>
        <BoxNames>
          <LineChartNames />
        </BoxNames>
      </ChartDiv>
    </ChartContainer>
  )
}

import LineChart from '../LineChart'
import { LineChartNames } from '../ChartNames'
import { Chart, ChartDiv, ChartContainer, Title } from './styled'

export default function IsiGadPhq() {
  return (
    <ChartContainer>
      <Title>Avaliações semanais</Title>
      <ChartDiv>
        |<LineChartNames />
        <Chart>
          <LineChart />
        </Chart>
      </ChartDiv>
    </ChartContainer>
  )
}

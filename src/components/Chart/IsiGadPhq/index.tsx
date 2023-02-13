import LineChartNames from '../ChartNames/LineChartNames'
import LineChart from '../LineChart'
import { Chart, ChartContainer } from './styled'

export default function IsiGadPhq() {
  return (
    <ChartContainer>
      <LineChartNames />
      <Chart>
        <LineChart />
      </Chart>
    </ChartContainer>
  )
}

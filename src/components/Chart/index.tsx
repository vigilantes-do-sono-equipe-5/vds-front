import BarChart from './BarChart'
import Buttons from './Buttons'
import ChartNames, { LegendData } from './ChartNames'
import { BoxButtons, BoxChart, ChartContainer, ChartDiv, Title } from './styled'

export default function Chart() {
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <ChartNames />
        <BoxChart>
          <BarChart data={LegendData} />
        </BoxChart>
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

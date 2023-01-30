import {
  Block,
  ChartContainer,
  ChartDiv,
  ChartItem,
  Dash,
  Legend,
  LegendDiv,
  Percentage,
  SelectTimeButton,
  Time,
  Title
} from './styled'
import React from 'react'

export default function Chart() {
  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <LegendDiv>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
          <Legend>
            <Block />
            <Percentage>Sono 5%</Percentage>
          </Legend>
        </LegendDiv>
        <ChartItem />
        <Time>
          <Title>GRÁFICO</Title>
          <SelectTimeButton>
            <Dash />
            <span>Semana</span>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <span>Mês</span>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <span>Ano</span>
          </SelectTimeButton>
        </Time>
      </ChartDiv>
    </ChartContainer>
  )
}

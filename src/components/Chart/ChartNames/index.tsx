import { IChartData } from '../../../interfaces/Chart.interface'
import { LegendDiv } from './styled'

export const LegendData: IChartData = {
  labels: ['1 star', '2 star', '3 start', '4 star', '5 star'],
  datasets: {
    barThickness: 30,
    label: 'Rating',
    data: [5, 4, 8, 10, 50],
    backgroundColor: ['blue', 'red', 'green', 'yellow', 'purple']
  }
}

export default function ChartNames() {
  return (
    <LegendDiv>
      {/* {LegendData.map((el, index) => (
        <NameItem key={index}>
          <Square color={el.color} />
          <Percentage>
            {el.name} {el.percent}%
          </Percentage>
        </NameItem>
      ))} */}
    </LegendDiv>
  )
}

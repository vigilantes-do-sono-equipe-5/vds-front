import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import { IChartData, IReportChart } from '../../../interfaces/Chart.interface'
import BarChart from '../BarChart'
import { LegendData } from '../ChartNames'
import { BoxChart, ChartContainer, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function RatingChart({
  title,
  name,
  data
}: {
  title: string
  name: string[]
  data: {
    barThickness?: number | undefined
    label: string
    data: number[]
    backgroundColor: string[]
  }
}) {
  const [nameChart, setNameChart] = useState(name)
  const [dataChart, setDataLanbels] = useState(data)

  useEffect(() => {
    setNameChart(name)
    setDataLanbels(data)
  }, [name, data])

  return (
    <ChartContainer>
      <Title>Avaliações {title}</Title>
      <BoxChart>
        <BarChart labels={nameChart} datasets={dataChart} />
      </BoxChart>
    </ChartContainer>
  )
}

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect } from 'react'
import { IChartData } from '../../../interfaces/Chart.interface'
import BarChart from '../BarChart'
import { BoxChart, Container, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

interface IReportChart {
  name: string
  data: IChartData
}

export default function ReportChart({ name, data }: IReportChart) {
  useEffect(() => {}, [])

  return (
    <Container>
      <Title>{name}</Title>
      <BoxChart>
        <BarChart labels={data.labels} datasets={data.datasets} />
      </BoxChart>
    </Container>
  )
}

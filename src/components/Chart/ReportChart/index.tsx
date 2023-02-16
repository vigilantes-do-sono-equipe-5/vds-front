import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import { IChartData } from '../../../interfaces/Chart.interface'
import BarChart from '../BarChart'
import { BoxChart, Container, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

interface IReportChart {
  name: string
  data: IChartData
}

export default function ReportChart({ name, data }: IReportChart) {
  const [nameChart, setNameChart] = useState<string>(name)
  const [dataChart, setDataChart] = useState<IChartData>(data)

  useEffect(() => {
    setNameChart(name)
    setDataChart(data)
  }, [name, data])

  return (
    <Container>
      <Title>{nameChart}</Title>
      <BoxChart>
        <BarChart labels={dataChart.labels} datasets={dataChart.datasets} />
      </BoxChart>
    </Container>
  )
}

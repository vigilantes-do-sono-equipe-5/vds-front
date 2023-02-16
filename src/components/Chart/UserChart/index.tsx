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
import PieChart from '../PieChart'
import { BoxChart, Container, Title } from './styled'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function UserChart({ name, data }: IReportChart) {
  const [nameChart, setNameChart] = useState(name)
  const [dataChart, setDataLanbels] = useState(data)

  useEffect(() => {
    setNameChart(name)
    setDataLanbels(data)
  }, [name, data])

  return (
    <Container>
      <Title>{nameChart}</Title>
      <BoxChart>
        <PieChart labels={dataChart.labels} datasets={dataChart.datasets} />
      </BoxChart>
    </Container>
  )
}

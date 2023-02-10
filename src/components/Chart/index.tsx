// import { v4 as uuidv4 } from 'uuid'
import { Menu } from './Menu'
import { useEffect, useState } from 'react'
import {
  ChartContainer,
  ChartDiv,
  Dash,
  SelectTimeButton,
  Time,
  Title
} from './styled'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function Chart(): JSX.Element {
  // Função para enviar os datos formatados para o gráfico do jeito que ele pede com as labels e os datasets
  const formatData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        barThickness: 55,
        label: 'My Data',
        data: ['5', '10', '15', '20', '25', '25'],
        backgroundColor: [
          'red',
          'yellow ',
          'orange',
          'green',
          'blue',
          'indigo'
        ],
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const [toggle, setToggle] = useState(true)
  const [btnColor, setBtnColor] = useState('#ffffff')
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  useEffect(() => {
    setBtnColor(state => (toggle ? '#ffffff' : '#aea0f8'))
  }, [toggle])

  return (
    <ChartContainer>
      <Title>ESTATÍSTICAS DA SEMANA</Title>
      <ChartDiv>
        <Menu />
        <Bar
          data={formatData}
          options={{
            aspectRatio: 2,
            responsive: true,
            layout: { padding: { left: 30, right: 30, top: 40, bottom: 20 } },
            plugins: {
              title: {
                display: true
              },
              legend: {
                display: false
              }
            }
          }}
        />
        <Time>
          <h2>GRÁFICO</h2>
          <SelectTimeButton>
            <Dash />
            <h3>Barra</h3>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <h3>Pizza</h3>
          </SelectTimeButton>
          <SelectTimeButton>
            <Dash />
            <h3>Polar</h3>
          </SelectTimeButton>
        </Time>
      </ChartDiv>
    </ChartContainer>
  )
}

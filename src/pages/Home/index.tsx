import ConfigDashboard from '../../components/ConfigDashboard'
import AverageOfSessions from '../../components/DashBoards/AverageOfSessions'
import MainNumbers from '../../components/DashBoards/MainNumbers'
import { Container } from './styled'
import { v4 as uuidv4 } from 'uuid'
import { IData } from '../../components/Chart'
import { SetStateAction, useState } from 'react'

const evaluationsData: IData[] = [
  {
    id: uuidv4(),
    name: '1',
    percent: 100,
    color: 'yellow'
  },
  {
    id: uuidv4(),
    name: '2',
    percent: 200,
    color: 'orange'
  },
  {
    id: uuidv4(),
    name: '3',
    percent: 300,
    color: 'red'
  },
  {
    id: uuidv4(),
    name: '4',
    percent: 400,
    color: 'green'
  },
  {
    id: uuidv4(),
    name: '5',
    percent: 500,
    color: 'blue'
  }
]

export default function Home() {
  const [switchComponent, setSwitchComponent] = useState({
    config: true,
    main: false,
    evaluations: false,
    goals: false
  })
  return (
    <Container>
      {switchComponent.config && (
        <ConfigDashboard setSwitchComponent={setSwitchComponent} />
      )}
      {switchComponent.main && (
        <MainNumbers setSwitchComponent={setSwitchComponent} />
      )}
      {switchComponent.evaluations && (
        <AverageOfSessions
          legendData={evaluationsData}
          graficName={'Avaliações'}
          switchTime={true}
          numberSessions={2298}
          setSwitchComponent={setSwitchComponent}
          switchObjectBefore={{
            config: false,
            main: true,
            evaluations: false,
            goals: false
          }}
          switchObjectAfter={{
            config: false,
            main: false,
            evaluations: false,
            goals: true
          }}
        />
      )}
      {switchComponent.goals && (
        <AverageOfSessions
          legendData={evaluationsData}
          graficName={'Objetivos Escolhidos'}
          switchTime={true}
          numberSessions={2298}
          setSwitchComponent={setSwitchComponent}
          switchObjectBefore={{
            config: false,
            main: false,
            evaluations: true,
            goals: false
          }}
          switchObjectAfter={{
            config: false,
            main: false,
            evaluations: false,
            goals: true
          }}
        />
      )}
    </Container>
  )
}

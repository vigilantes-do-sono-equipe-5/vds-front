import { SetStateAction, useEffect, useState } from 'react'
import Calendar from '../../components/Calendar'
import AverageChart from '../../components/Chart/AverageChart'
import IsiGadPhq from '../../components/Chart/IsiGadPhq'
import RatingChart from '../../components/Chart/RatingChart'
import ReportChart from '../../components/Chart/ReportChart'
import UserChart from '../../components/Chart/UserChart'
import { useContextCompany } from '../../contexts/ContextCompany'
import { IChartData } from '../../interfaces/Chart.interface'
import {
  BottomBox,
  BoxChart,
  BoxInfo,
  ChartDepre,
  ChartUsers,
  Client,
  Container,
  MediaGeral,
  MiddleBox,
  TopBox
} from './styled'

const dataInitial: IChartData = {
  labels: ['total'],
  datasets: {
    label: 'total',
    data: [0],
    backgroundColor: ['blue']
  }
}

export default function Home() {
  const { companyStates, companyFunctions } = useContextCompany()
  const [chosenCompany, setChosenCompany] = useState<string>()
  const [dataUserProgramSession, setDataUserProgramSession] =
    useState<IChartData>(dataInitial)
  const [dataSleepDiaries, setDataSleepDiaries] =
    useState<IChartData>(dataInitial)
  const [dataTechniques, setDataTechniques] = useState<IChartData>(dataInitial)

  const handleCompany = (event: {
    target: { value: SetStateAction<string | undefined> }
  }) => {
    setChosenCompany(event.target.value)
  }

  const mountData = (value: number): IChartData => {
    return {
      labels: ['total'],
      datasets: {
        label: 'total',
        data: [value],
        backgroundColor: ['blue']
      }
    }
  }

  useEffect(() => {
    companyFunctions
      .getCompanies()
      .catch(error => console.log('getCompanies', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (chosenCompany) {
      companyFunctions
        .getMainNumbers(chosenCompany)
        .catch(error => console.log('getCompanies', error))
      setDataUserProgramSession(
        mountData(companyStates.mainNumbers.userProgramSession)
      )
      setDataSleepDiaries(mountData(companyStates.mainNumbers.sleepDiaries))
      setDataTechniques(mountData(companyStates.mainNumbers.techniques))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCompany])

  return (
    <Container>
      <Client name='empresas' onChange={e => handleCompany(e)}>
        <option value={undefined}>Escolha uma empresa...</option>
        {companyStates.companies.map(e => {
          return (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          )
        })}
      </Client>
      <TopBox>
        <BoxChart>
          <UserChart />
        </BoxChart>
        <BoxChart>
          <RatingChart />
        </BoxChart>
        <ChartUsers>
          <Calendar />
        </ChartUsers>
      </TopBox>
      <MiddleBox>
        <BoxInfo>
          <ReportChart
            name='Total de sessões feitas'
            data={dataUserProgramSession}
          />
        </BoxInfo>
        <BoxInfo>
          <ReportChart
            name='Noites de sono reportadas'
            data={dataSleepDiaries}
          />
        </BoxInfo>
        <BoxInfo>
          <ReportChart name='Técnicas aplicadas' data={dataTechniques} />
        </BoxInfo>
      </MiddleBox>
      <BottomBox>
        <MediaGeral>
          <AverageChart />
        </MediaGeral>
        <ChartDepre>
          <IsiGadPhq />
        </ChartDepre>
      </BottomBox>
    </Container>
  )
}

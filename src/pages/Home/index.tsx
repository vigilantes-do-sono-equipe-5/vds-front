import { ChangeEvent, useEffect, useState } from 'react'
import Calendar from '../../components/Calendar'
import AverageChart from '../../components/Chart/AverageChart'
import IsiGadPhq from '../../components/Chart/IsiGadPhq'
import RatingChart from '../../components/Chart/RatingChart'
import ReportChart from '../../components/Chart/ReportChart'
import UserChart from '../../components/Chart/UserChart'
import { useContextCompany } from '../../contexts/ContextCompany'
import { IChartData } from '../../interfaces/Chart.interface'
import { ICompany } from '../../interfaces/contextCompany.interfaces'
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

const dataUserInitial: IChartData = {
  labels: ['Usúarios ativos', 'Usuarios inativos'],
  datasets: {
    label: '',
    data: [0, 0],
    backgroundColor: ['green', 'blue']
  }
}

export default function Home() {
  const { companyStates, companyFunctions } = useContextCompany()
  const [chosenCompany, setChosenCompany] = useState<string>('')
  const [company, setCompany] = useState<ICompany[] | undefined>()
  const [dataUserProgramSession, setDataUserProgramSession] =
    useState<IChartData>(dataInitial)
  const [dataSleepDiaries, setDataSleepDiaries] =
    useState<IChartData>(dataInitial)
  const [dataTechniques, setDataTechniques] = useState<IChartData>(dataInitial)
  const [dataUser, setDataUser] = useState<IChartData>(dataUserInitial)

  const handleChosenCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setChosenCompany(event.target.value)
  }

  const handleCompany = () => {
    if (chosenCompany !== '') {
      const filterCompany = companyStates.companies.filter(
        e => e.id === chosenCompany
      )
      setCompany(
        filterCompany || [
          {
            id: '',
            name: '',
            employees: 0,
            activeEmployees: 0
          }
        ]
      )
      console.log(filterCompany)
    }
  }

  const mountData = (
    dataValue: number | number[],
    labelsValue: string | string[],
    colorValue: string[]
  ): IChartData => {
    return {
      labels: typeof labelsValue === 'string' ? [labelsValue] : labelsValue,
      datasets: {
        label: '',
        data: typeof dataValue === 'number' ? [dataValue] : dataValue,
        backgroundColor: colorValue
      }
    }
  }

  const handleMainNumbers = async () => {
    if (chosenCompany !== '') {
      await companyFunctions
        .getMainNumbers(chosenCompany)
        .catch(error => console.log('getCompanies', error))
      setDataUserProgramSession(
        mountData(companyStates.mainNumbers.userProgramSession, 'total', [
          'blue'
        ])
      )
      setDataSleepDiaries(
        mountData(companyStates.mainNumbers.sleepDiaries, 'total', ['blue'])
      )
      setDataTechniques(
        mountData(companyStates.mainNumbers.techniques, 'total', ['blue'])
      )
    } else {
      setDataUserProgramSession(dataInitial)
      setDataSleepDiaries(dataInitial)
      setDataTechniques(dataInitial)
    }
  }

  const handleActiveUsers = (): void => {
    if (typeof company !== 'undefined' && chosenCompany !== '') {
      const active = (company[0].activeEmployees * 100) / company[0].employees
      const inactive = 100 - active
      console.log('dataUser', company[0])
      setDataUser(
        mountData(
          [active, inactive],
          ['Usúarios ativos', 'Usuarios inativos'],
          ['green', 'blue']
        )
      )
    } else {
      setDataUser(dataUserInitial)
    }
  }

  useEffect(() => {
    companyFunctions
      .getCompanies()
      .catch(error => console.log('getCompanies', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleMainNumbers().catch(error => console.log('handleMainNumbers', error))
    handleCompany()
    handleActiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCompany])

  return (
    <Container>
      <Client name='empresas' onChange={e => handleChosenCompany(e)}>
        <option value=''>{'Escolha uma empresa...'}</option>
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
          <UserChart name={'Usúários ativos'} data={dataUser} />
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

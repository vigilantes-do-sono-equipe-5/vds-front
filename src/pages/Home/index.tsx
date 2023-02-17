import { ChangeEvent, useEffect, useState } from 'react'
import Calendar from '../../components/Calendar'
import AverageChart from '../../components/Chart/AverageChart'
import IsiGadPhq from '../../components/Chart/IsiGadPhq'
import RatingChart from '../../components/Chart/RatingChart'
import ReportChart from '../../components/Chart/ReportChart'
import UserChart from '../../components/Chart/UserChart'
import { useContextCompany } from '../../contexts/ContextCompany'
import { useContextGad } from '../../contexts/ContextGad'
import { useContextIsi } from '../../contexts/ContextIsi'
import { useContextPhq } from '../../contexts/ContextPhq'
import { useContextRatings } from '../../contexts/ContextRatings'
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

const dataRatingsInitial: IChartData = {
  labels: ['1 ⭐', '2 ⭐', '3 ⭐', '4 ⭐', '5 ⭐'],
  datasets: {
    label: '',
    data: [0, 0, 0, 0, 0],
    backgroundColor: ['blue', 'blue', 'blue', 'blue', 'blue']
  }
}

const dataChosenGoalsInitial: IChartData = {
  labels: ['Concentração', 'Energia', 'Humor', 'Realacionamentos'],
  datasets: {
    label: '',
    data: [0, 0, 0, 0],
    backgroundColor: ['blue', 'red', 'green', 'yellow']
  }
}

const dataIsiGadPhqInitial: {
  labels: string[]
  datasets: Array<{
    label: string
    barThickness?: number
    data: number[]
    backgroundColor: string | string[]
    borderColor?: string
    borderWidth?: number
  }>
} = {
  labels: ['Inicio', 'Meio', 'Final'],
  datasets: [
    {
      label: 'ISI',
      barThickness: 50,
      data: [0, 0, 0],
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 1
    },
    {
      label: 'GAD',
      barThickness: 50,
      data: [0, 0, 0],
      backgroundColor: 'orange',
      borderColor: 'black',
      borderWidth: 1
    },
    {
      label: 'PHQ',
      barThickness: 50,
      data: [0, 0, 0],
      backgroundColor: 'green',
      borderColor: 'black',
      borderWidth: 1
    }
  ]
}

export default function Home() {
  const [date, setDate] = useState<{
    period?: string[]
    type: 'week' | 'month'
  }>()
  const { isiStates, isiFunctions } = useContextIsi()
  const { gadStates, gadFunctions } = useContextGad()
  const { phqStates, phqFunctions } = useContextPhq()
  const { companyStates, companyFunctions } = useContextCompany()
  const { ratingsStates, ratingsFunctions } = useContextRatings()
  const [chosenCompany, setChosenCompany] = useState<string>('')
  const [company, setCompany] = useState<ICompany[] | undefined>()
  const [dataUserProgramSession, setDataUserProgramSession] =
    useState<IChartData>(dataInitial)
  const [dataSleepDiaries, setDataSleepDiaries] =
    useState<IChartData>(dataInitial)
  const [dataTechniques, setDataTechniques] = useState<IChartData>(dataInitial)
  const [dataUser, setDataUser] = useState<IChartData>(dataUserInitial)
  const [dataRatings, setDataRatings] = useState<IChartData>(dataRatingsInitial)
  const [dataChosenGoals, setDataChosenGoals] = useState<IChartData>(
    dataChosenGoalsInitial
  )
  const [dataIsiGadPhq, setDataIsiGadPhq] = useState(dataIsiGadPhqInitial)

  const handleSetDate = (object: {
    period?: string[]
    type: 'week' | 'month'
  }): void => {
    setDate(object)
  }

  const handleChosenCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setChosenCompany(event.target.value)

    const filterCompany = companyStates.companies.filter(
      e => e.id === event.target.value
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
    handleRatings().catch(error => console.log('handleRatings', error))
  }

  const mountData = (
    dataValue: number | number[],
    labelsValue: string | string[],
    colorValue: string[],
    borderColor?: string,
    borderWidth?: number,
    barThickness?: number
  ) => {
    return {
      labels: typeof labelsValue === 'string' ? [labelsValue] : labelsValue,
      datasets: {
        barThickness,
        label: '',
        data: typeof dataValue === 'number' ? [dataValue] : dataValue,
        backgroundColor: colorValue,
        borderColor,
        borderWidth
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

  const handleChosenGoals = async () => {
    if (chosenCompany !== '' && typeof company !== 'undefined') {
      await companyFunctions.getChosenGoals(company[0].id)
      setDataChosenGoals(
        mountData(
          [
            companyStates.chosenGoals.concentration,
            companyStates.chosenGoals.energy,
            companyStates.chosenGoals.humor,
            companyStates.chosenGoals.relationships
          ],
          ['Concentração', 'Energia', 'Humor', 'Realacionamentos '],
          ['blue', 'red', 'green', 'yellow']
        )
      )
    } else {
      setDataChosenGoals(dataChosenGoalsInitial)
    }
  }

  const handleActiveUsers = (): void => {
    if (typeof company !== 'undefined' && chosenCompany !== '') {
      const active = (company[0].activeEmployees * 100) / company[0].employees
      const inactive = 100 - active
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

  const handleIsiGadPhq = async () => {
    if (
      typeof company !== 'undefined' &&
      chosenCompany !== '' &&
      typeof date?.period !== 'undefined'
    ) {
      await isiFunctions.getAverageIsi(
        company[0].id,
        date.period[0],
        date.period[1]
      )
      await gadFunctions.getAverageGad(
        company[0].id,
        date.period[0],
        date.period[1]
      )
      await phqFunctions.getAveragePhq(
        company[0].id,
        date.period[0],
        date.period[1]
      )
      if (
        typeof isiStates.averageIsi !== 'undefined' &&
        typeof gadStates.averageGad !== 'undefined' &&
        typeof phqStates.averagePhq !== 'undefined'
      ) {
        const dataIsi = mountData(
          [
            isiStates.averageIsi?.beginningAverageIsi,
            isiStates.averageIsi?.middleAverageIsi,
            isiStates.averageIsi?.endAverageIsi
          ],
          ['Inicio', 'Meio', 'Final'],
          ['red'],
          'black',
          1,
          50
        )

        const dataGad = mountData(
          [
            gadStates.averageGad?.beginningAverageGad,
            gadStates.averageGad?.middleAverageGad,
            gadStates.averageGad?.endAverageGad
          ],
          ['Inicio', 'Meio', 'Final'],
          ['orange'],
          'black',
          1,
          50
        )

        const dataPhq = mountData(
          [
            phqStates.averagePhq?.beginningAveragePhq,
            phqStates.averagePhq?.middleAveragePhq,
            phqStates.averagePhq?.endAveragePhq
          ],
          ['Inicio', 'Meio', 'Final'],
          ['green'],
          'black',
          1,
          50
        )

        setDataIsiGadPhq({
          labels: ['', '', '', '', ''],
          datasets: [
            { ...dataIsi.datasets },
            { ...dataGad.datasets },
            { ...dataPhq.datasets }
          ]
        })
      } else {
        setDataIsiGadPhq(dataIsiGadPhqInitial)
      }
    }
  }

  const handleRatings = async () => {
    if (
      typeof company !== 'undefined' &&
      chosenCompany !== '' &&
      typeof date?.period !== 'undefined'
    ) {
      await ratingsFunctions.getRatings(
        company[0].id,
        date.period[0],
        date.period[1]
      )
    }

    if (
      typeof company !== 'undefined' &&
      chosenCompany !== '' &&
      typeof date?.period !== 'undefined' &&
      typeof ratingsStates?.ratings !== 'undefined'
    ) {
      setDataRatings(
        mountData(
          [
            ratingsStates.ratings?.[1],
            ratingsStates.ratings?.[2],
            ratingsStates.ratings?.[3],
            ratingsStates.ratings?.[4],
            ratingsStates.ratings?.[5]
          ],
          ['1 ⭐', '2 ⭐', '3 ⭐', '4 ⭐', '5 ⭐'],
          ['blue', 'blue', 'blue', 'blue', 'blue']
        )
      )
    } else {
      setDataRatings(dataRatingsInitial)
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
    handleRatings().catch(error => console.log('handleRatings', error))
    handleChosenGoals().catch(error => console.log('handleChosenGoals', error))
    handleIsiGadPhq().catch(error => console.log('handleIsiGadPhq', error))
    handleActiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCompany, date])

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
          <UserChart name={'Usuários ativos'} data={dataUser} />
        </BoxChart>
        <BoxChart>
          <RatingChart
            name={dataRatings.labels}
            data={dataRatings.datasets}
            title={date?.type === 'week' ? 'da Semana' : 'do Mês'}
          />
        </BoxChart>
        <ChartUsers>
          <Calendar handleSetDate={handleSetDate} />
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
          <AverageChart
            name={dataChosenGoals.labels}
            data={dataChosenGoals.datasets}
          />
        </MediaGeral>
        <ChartDepre>
          <IsiGadPhq
            labels={dataIsiGadPhq.labels}
            datasets={dataIsiGadPhq.datasets}
          />
        </ChartDepre>
      </BottomBox>
    </Container>
  )
}

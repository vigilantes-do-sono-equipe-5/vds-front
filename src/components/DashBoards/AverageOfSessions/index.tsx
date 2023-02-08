import ButtonsAfterBefore from '../../ButtonsAfterBefore'
import Chart, { IData } from '../../Chart'
import { SBlockOne, SContainer, SContainerInternal, SGrade } from './style'

interface IProps {
  legendData: IData[]
  graficName: string
  switchTime: boolean
  numberSessions: number
  setSwitchComponent: React.Dispatch<
    React.SetStateAction<{
      config: boolean
      main: boolean
      evaluations: boolean
      goals: boolean
    }>
  >
  switchObjectBefore: {
    config: boolean
    main: boolean
    evaluations: boolean
    goals: boolean
  }
  switchObjectAfter: {
    config: boolean
    main: boolean
    evaluations: boolean
    goals: boolean
  }
}

function AverageOfSessions({
  legendData,
  graficName,
  switchTime,
  numberSessions,
  setSwitchComponent,
  switchObjectBefore,
  switchObjectAfter
}: IProps) {
  return (
    <SContainer>
      <SContainerInternal>
        <SBlockOne>
          <SGrade>
            <h2>4,61</h2>
            <img
              width={'25rem'}
              height={'25rem'}
              src='https://cdn.discordapp.com/attachments/985645895779508254/1072690622877679696/star.png'
              alt='star'
            />
          </SGrade>

          <h2>Nota média das Sessões</h2>

          <h4>De {numberSessions} sessões realizadas</h4>
        </SBlockOne>

        <div id='sizeChart'>
          <Chart
            legendData={legendData}
            graficName={graficName}
            switchTime={switchTime}
          />
        </div>
      </SContainerInternal>
      <ButtonsAfterBefore
        setSwitchComponent={setSwitchComponent}
        switchObjectBefore={switchObjectBefore}
        switchObjectAfter={switchObjectAfter}
      />
    </SContainer>
  )
}

export default AverageOfSessions

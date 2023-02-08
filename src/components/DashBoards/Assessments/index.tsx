import Chart, { IData } from '../../Chart'
import { v4 as uuidv4 } from 'uuid'
import { SBlockOne, SContainer, SGrade } from './style'

const legendData: IData[] = [
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

function Assessments() {
  return (
    <>
      <SContainer>
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

          <h4>De {2298} sessões realizadas</h4>
        </SBlockOne>

        <div id='sizeChart'>
          <Chart legendData={legendData} graficName={''} switchTime={true} />
        </div>
      </SContainer>
    </>
  )
}

export default Assessments

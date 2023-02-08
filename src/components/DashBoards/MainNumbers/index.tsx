import ButtonsAfterBefore from '../../ButtonsAfterBefore'
import { Container } from './style'

interface IProps {
  setSwitchComponent: React.Dispatch<
    React.SetStateAction<{
      config: boolean
      main: boolean
      evaluations: boolean
      goals: boolean
    }>
  >
}

function MainNumbers({ setSwitchComponent }: IProps): JSX.Element {
  return (
    <Container>
      <div id='datos'>
        <div>
          <span>2038</span>
          <h2>Total de Sessões Feitas</h2>
        </div>
        <div>
          <span>4087</span>
          <h2>Noites de Sono Reportadas</h2>
        </div>
        <div>
          <span>2637</span>
          <h2>Técnicas Aplicadas</h2>
        </div>
      </div>
      <ButtonsAfterBefore
        setSwitchComponent={setSwitchComponent}
        switchObjectBefore={{
          config: true,
          main: false,
          evaluations: false,
          goals: false
        }}
        switchObjectAfter={{
          config: false,
          main: false,
          evaluations: true,
          goals: false
        }}
      />
    </Container>
  )
}

export default MainNumbers

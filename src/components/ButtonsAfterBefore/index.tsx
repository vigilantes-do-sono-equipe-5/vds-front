import { SContainer } from './style'

interface IProps {
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

function ButtonsAfterBefore({
  setSwitchComponent,
  switchObjectBefore,
  switchObjectAfter
}: IProps) {
  return (
    <SContainer>
      <button
        onClick={() => {
          setSwitchComponent(switchObjectBefore)
        }}>
        Anterior
      </button>
      <button
        onClick={() => {
          setSwitchComponent(switchObjectAfter)
        }}>
        Próximo
      </button>
    </SContainer>
  )
}

export default ButtonsAfterBefore

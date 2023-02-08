import { useState } from 'react'
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
}

function ConfigDashboard({ setSwitchComponent }: IProps): JSX.Element {
  const [mockEmpresas, setMockEmpresas] = useState([
    { id: 1, name: 'Empresa X' },
    { id: 2, name: 'Empresa y' },
    { id: 3, name: 'Empresa z' }
  ])
  return (
    <>
      <SContainer>
        <div>
          <fieldset>
            <label htmlFor='selectCompany'>Empresa:</label>
            <select id='selectCompany'>
              {mockEmpresas.map(e => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label>Período:</label>
            <fieldset id='periodo'>
              <label>Inicio:</label>
              <input id='dateInitial' type='date' />
              <label>Fim:</label>
              <input id='dateFinal' type='date' />
            </fieldset>
          </fieldset>
        </div>

        <button
          onClick={() => {
            setSwitchComponent({
              config: false,
              main: true,
              evaluations: false,
              goals: false
            })
          }}>
          Próximo
        </button>
      </SContainer>
    </>
  )
}

export default ConfigDashboard

import styled from 'styled-components'

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    gap: 15rem;
    align-items: center;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    gap: 1rem;
  }

  fieldset #periodo {
    display: flex;
    flex-direction: row;
  }
`

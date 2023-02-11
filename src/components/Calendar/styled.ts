import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  min-width: 15rem;
  width: auto;
  max-width: 25rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
  background: ${props => props.theme.colors.box};
  color: ${props => props.theme.colors.text};
`

export const BoxCalendar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 1rem;
`

export const BoxMonth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /* border: 0.2px solid grey; */
  padding: 0.5rem;
  width: 15rem;
  height: 15rem;
`

export const BoxYear = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 1rem;
`

export const BoxButton = styled.div`
  width: 10rem;
`

export const SelectionButtons = styled.button`
  width: 5rem;
  height: 5rem;
`

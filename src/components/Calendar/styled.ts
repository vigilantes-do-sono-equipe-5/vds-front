import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 25rem;
  height: 15rem;
  background: ${props => props.theme.colors.box};
  color: ${props => props.theme.colors.text};
`

export const ButtonCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: capitalize;
  width: 15rem;
  padding-left: 1rem;
  /* border: 0.2px solid grey; */
`

export const Icon = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 1rem;
  width: 3rem;
  color: ${props => props.theme.colors.text};
`

export const BoxCalendar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 1rem;
`

export const Calendary = styled.div`
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
export const Weeks = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
`
export const DaysWeeks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
`
export const BoxButton = styled.div`
  width: 10rem;
`

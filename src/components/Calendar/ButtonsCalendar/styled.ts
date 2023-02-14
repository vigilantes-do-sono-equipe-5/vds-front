import styled from 'styled-components'

export const ButtonCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  width: 15rem;
  margin-bottom: 1rem;
`

export const SelectMonth = styled.button`
  font-weight: 900;
  font-size: 1rem;
  padding-left: 1rem;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  border: none;
  cursor: pointer;
`

export const Icon = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 1rem;
  width: 3rem;
  color: black;
  cursor: pointer;
`

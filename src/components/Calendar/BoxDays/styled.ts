import styled from 'styled-components'

export const Weeks = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 1rem;
  height: 1rem;
  color: black;
  font-size: 0.9rem;
  cursor: pointer;

  &.selected {
    border-radius: 30px;
  }
  padding-left: 1rem;
`

export const DaysWeeks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
  padding-left: 1rem;
`

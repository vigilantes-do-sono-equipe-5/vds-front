import styled from 'styled-components'

export const Weeks = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.text};

  &.selected {
    background-color: red;
    border-radius: 30px;
  }
`

export const DaysWeeks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
`

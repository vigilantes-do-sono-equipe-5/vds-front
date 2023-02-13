import styled from 'styled-components'

export const MonthBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 13rem;
  height: 13rem;
`

export const Month = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: ${props => props.theme.colors.text};
  text-transform: capitalize;
  border-radius: 20px;
  font-size: 0.8rem;
  /* padding: 0.3rem; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`

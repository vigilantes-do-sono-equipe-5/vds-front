import styled from 'styled-components'

export const LegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 15rem;
  min-height: 10rem;
  height: 100%;
  max-width: 10rem;
  min-width: 2rem;
  width: 100%;
  color: black;
`
export const LegendItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 8rem;
`
export const Square = styled.div`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${props => props.color};
`
export const Percentage = styled.span`
  font-size: 0.875rem;
  width: 100%;
  font-weight: bold;
`

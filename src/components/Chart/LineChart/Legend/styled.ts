import styled from 'styled-components'

export const LegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`
export const LegendItem = styled.div`
  display: flex;
  height: 2.5rem;
  justify-content: flex-start;
  align-items: center;
`
export const Square = styled.div`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${props => props.color};
  margin-right: 0.3rem;
`
export const Title = styled.h3`
  font-size: 0.875rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`

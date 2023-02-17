import styled from 'styled-components'

export const LegendDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 8rem;
  min-height: 4rem;
  max-width: 8rem;
  min-width: 2rem;
  width: 100%;
  height: 100%;
  column-gap: 1.5rem;
  color: black;
`
export const NameItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 4rem;
`
export const Square = styled.div`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${props => props.color};
`
export const Name = styled.span`
  font-size: 0.875rem;
  width: 100%;
  font-weight: bold;
`

export const LineLegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-right: 0.8rem;
  color: black;
`
export const LineNameItem = styled.div`
  display: flex;
  gap: 0.1rem;
`

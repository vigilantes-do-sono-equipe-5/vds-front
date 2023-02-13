import styled from 'styled-components'

export const LegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.2rem;
  max-height: 8rem;
  min-height: 4rem;
  max-width: 8rem;
  min-width: 2rem;
  width: 100%;
  height: 100%;
  color: black;
`
export const NameItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 4rem;
  gap: 0.1rem;
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

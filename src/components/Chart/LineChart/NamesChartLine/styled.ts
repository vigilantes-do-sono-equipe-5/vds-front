import styled from 'styled-components'

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 0.3rem;
  min-width: 5rem;
  width: 100%;
  color: black;
`
export const MenuItem = styled.div`
  justify-content: flex-start;
  min-width: 5rem;
  width: 100%;
  align-items: center;
  display: flex;
  height: 2.5rem;
`
export const Square = styled.div`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${props => props.color};
  margin-right: 0.3rem;
`
export const Title = styled.h1`
  min-width: 3rem;
  font-size: 0.875rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`

import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 15rem;
  max-height: 20rem;
  min-width: 15rem;
  max-width: 60rem;
  border-radius: 1.875rem;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
`
export const ChartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-width: 15rem;
  max-width: 50rem;
  min-height: 8rem;
  max-height: 40rem;
`

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  min-width: 10rem;
  width: 100%;
  max-width: 50rem;
  min-height: 8rem;
  height: 100%;
  max-height: 40rem;
`

export const Title = styled.h1`
  padding-left: 1rem;
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
`

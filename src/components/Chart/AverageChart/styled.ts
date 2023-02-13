import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  width: 100%;
  max-height: 23rem;
  min-height: 10rem;
  height: 100%;
  border-radius: 1.875rem;
  background-color: white;
  & h2 {
    font-size: 1.5rem;
    color: #787878;
  }
  & h3 {
    font-size: 1.3rem;
  }
`
export const Title = styled.h1`
  padding-left: 1rem;
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
`
export const ChartDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 40rem;
  min-width: 10rem;
  max-height: 20rem;
  min-height: 10rem;
  height: 100%;
`

export const BoxChart = styled.div`
  min-width: 10rem;
  width: 28rem;
  max-width: 30rem;
  height: auto;
`

export const BoxButtons = styled.div`
  max-width: 10rem;
  min-width: 5rem;
  width: 100%;
  max-height: 10rem;
  min-height: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: grey;
`

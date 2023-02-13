import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  width: 100%;
  max-width: 40rem;
  background-color: white;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
  font-size: 3rem;
  color: black;
  @media screen and (min-width: 1080px) {
    min-width: 6rem;
    width: 100%;
    max-width: 40rem;
  }
`
export const Title = styled.h1`
  padding-left: 1rem;
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`

export const BoxChart = styled.div`
  min-width: 10rem;
  width: 100%;
  max-width: 30rem;
  height: auto;
`

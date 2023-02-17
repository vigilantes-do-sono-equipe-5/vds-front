import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 15rem;
  width: 100%;
  max-width: 60rem;
  min-height: 15rem;
  height: 100%;
  max-height: 25rem;
  border-radius: 30px;
  background-color: white;
  color: black;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }
`
export const Title = styled.h1`
  padding-left: 1rem;
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
`
export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 40rem;
  width: 100%;
  min-width: 10rem;
  min-height: 10rem;
  height: 100%;
  max-height: 25rem;
`

export const BoxChart = styled.div`
  display: flex;
  justify-content: center;
  min-width: 10rem;
  width: 100%;
  max-width: 50rem;
  min-height: 8rem;
  height: 100%;
  max-height: 25rem;
`

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 10rem;
  max-height: 10rem;
  min-height: 4rem;
  height: 100%;
  color: grey;
`

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
export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 15rem;
  max-width: 60rem;
  min-height: 16rem;
  max-height: 30rem;
`

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  min-width: 15rem;
  width: 100%;
  max-width: 60rem;
  min-height: 8rem;
  height: 100%;
  max-height: 25rem;
`

export const Title = styled.h1`
  display: flex;
  margin-top: 2.3rem;
  padding-left: 1rem;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
`
export const BoxNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 8rem;
  max-height: 4rem;
  min-height: 3rem;
  height: 100%;
  color: grey;
  padding-bottom: 4rem;
`

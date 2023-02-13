import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  width: 100%;
  max-width: 40rem;
  background-color: white;
  padding: 1rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
  border-radius: 30px;
  font-size: 3rem;
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
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  @media screen and (max-width: 1080px) {
    font-size: 1rem;
  }
`

export const BoxChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: c;
  min-width: 10rem;
  width: 100%;
  max-width: 30rem;
  height: 100%;
`

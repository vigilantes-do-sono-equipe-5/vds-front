import styled, { css } from 'styled-components'

export const ChartContainer = styled.div`
  max-width: 55rem;
  min-width: 30rem;
  width: 100%;
  max-height: 23rem;
  min-height: 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  font-weight: bold;
  font-size: 2rem;
  color: #787878;
`
export const ChartDiv = styled.div`
  max-width: 40rem;
  min-width: 10rem;
  width: 100%;
  max-height: 20rem;
  min-height: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Time = styled.div`
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
`
export const SelectTimeButton = styled.button`
  max-width: 5rem;
  min-width: 2rem;
  width: 100%;
  max-height: 2.2rem;
  min-height: 1.2rem;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.6rem;
  border: solid 2px #aea0f8;
  background-color: #ffffff;
  align-items: center;
  color: #787878;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #aea0f8;
    color: #ffffff;
    & div {
      background-color: #ffffff;
    }
  }
`
export const Dash = styled.div`
  width: 0.3rem;
  height: 1.6rem;
  border-radius: 1rem;
  background-color: #aea0f8;
  transition: all ease-in-out 0.2s;
`

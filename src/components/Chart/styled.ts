import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  max-height: 25rem;
  padding: 1.9rem 1.25rem 1.9rem 1.25rem;
  border-radius: 1.875rem;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
`
export const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: #787878;
`
export const ChartDiv = styled.div`
  width: 70%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`
export const LegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 50%;
  color: black;
`
export const LegendItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.2rem;
  margin-right: 0.5rem;
  max-height: 80%;
`
export const Square = styled.div`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${props => props.color};
  margin-right: 0.8rem;
`
export const Percentage = styled.span`
  font-size: 0.875rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 0.5rem;
`
export const SelectTimeButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.8rem;
  border: solid 3px #aea0f8;
  background-color: ${props => props.color};
  align-items: center;
  color: #787878;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #aea0f8;
    color: #ffffff;
    & div {
      background-color: '';
    }
  }
`
export const Dash = styled.div`
  width: 0.5rem;
  height: 1.6rem;
  border-radius: 1rem;
  background-color: #aea0f8;
  margin-right: 0.5rem;
  transition: all ease-in-out 0.2s;
`

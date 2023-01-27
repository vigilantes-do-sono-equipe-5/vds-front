import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  height: 50%;
  padding: 1.938rem 1.25rem 1.938rem 1.25rem;
  border-radius: 1.875rem;
  background-color: white;
`
export const Title = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #787878;
`
export const ChartDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`
export const LegendDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
export const Block = styled.div`
  width: 1.63rem;
  height: 1.63rem;
  background-color: red;
  margin-right: 0.8rem;
`
export const Percentage = styled.span`
  font-size: 0.875rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`
export const ChartItem = styled.div`
  width: 40rem;
  height: 17rem;
  background-color: lightgray;
`
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const SelectTimeButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.8rem;
  border: solid 3px #aea0f8;
  background-color: #ffffff;
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
  }
`
export const Dash = styled.div`
  width: 0.464rem;
  height: 1.624rem;
  border-radius: 25%;
  background-color: #aea0f8;
  margin-right: 0.5rem;
  transition: all ease-in-out 0.2s;
`

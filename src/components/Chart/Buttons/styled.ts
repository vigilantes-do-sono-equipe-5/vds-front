import styled from 'styled-components'

export const ChartButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 5rem;
  min-width: 2rem;
  width: 100%;
  max-height: 2.2rem;
  min-height: 1.2rem;
  height: 100%;
  border-radius: 0.6rem;
  border: solid 2px #aea0f8;
  background-color: #ffffff;
  color: #787878;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  span {
    width: 0.3rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: #aea0f8;
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    background-color: #aea0f8;
    color: #ffffff;

    span {
      background-color: white;
      transition: all ease-in-out 0.2s;
    }
  }
`

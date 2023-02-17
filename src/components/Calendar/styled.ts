import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  min-width: 15rem;
  width: auto;
  max-width: 25rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
  background: white;
  color: black;
`

export const BoxCalendar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 15rem;
  width: 100%;
  min-width: 8rem;
  padding: 1rem;
  z-index: 100;

  @media screen and (max-width: 1080px) {
    padding-right: 1rem;
    width: 15rem;
  }
`

export const BoxMonth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border: 5px solide white;
  max-width: 15rem;
  width: 6rem;
  min-width: 8rem;
  border-radius: 20px;
  padding: 0.5rem;
  height: 15rem;
`

export const BoxYear = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 100%;
`

export const SelectionButtons = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 4rem;
  width: 100%;
  min-width: 2rem;
  max-height: 2.2rem;
  min-height: 1.2rem;
  height: 100%;
  border-radius: 0.6rem;
  border: solid 2px #aea0f8;
  background-color: #ffffff;
  color: #787878;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  margin-top: 1rem;

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

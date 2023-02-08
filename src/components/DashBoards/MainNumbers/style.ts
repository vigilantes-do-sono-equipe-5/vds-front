import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  width: 100%;
  justify-content: center;
  margin: 60rem 0 0 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    span {
      padding: 3rem;
      border: solid 1px black;
      text-align: center;
    }
  }
`

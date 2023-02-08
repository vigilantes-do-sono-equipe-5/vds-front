import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    span {
      padding: 3rem;
      border: solid 1px black;
      text-align: center;
    }
  }
`

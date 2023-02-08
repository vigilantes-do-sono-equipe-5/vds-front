import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  #datos {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    width: 100%;
    height: 90vh;
    justify-content: center;
    margin: auto;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      span {
        padding: 3rem;
        text-align: center;
      }
    }
  }
  #buttons {
    display: flex;
    justify-content: space-between;
    button {
      padding: 0.5rem 1rem;
    }
  }
`

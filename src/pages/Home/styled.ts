import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

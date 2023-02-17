import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 4rem;

  height: 100vh;
  width: 100%;
  max-width: 1920px;
  overflow: hidden;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`

export const Client = styled.select`
  min-width: 7rem;
  width: 100%;
  max-width: 40rem;
  height: 4rem;
  font-size: 3rem;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
  width: 100%;
  column-gap: 1rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
`

export const ChartUsers = styled.div`
  min-width: 15rem;
  width: 100%;
  max-width: 25rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`

export const BoxChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  width: 100%;
  max-width: 40rem;
  min-height: 10rem;
  height: 100%;
  max-height: 15rem;
  color: black;
`
export const MiddleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
  width: 100%;
  min-height: 6rem;
  height: 100%;
  max-height: 10rem;
`

export const BoxInfo = styled.div`
  min-width: 10rem;
  width: 100%;
  margin: 0 0.5rem;
  max-width: 30rem;
  height: 8rem;
  background-color: white;
  border-radius: 30px;
`

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
  width: 100%;
  min-height: 15rem;
  height: 100%;
  max-height: 25rem;
  column-gap: 1rem;
`

export const MediaGeral = styled.div`
  min-width: 10rem;
  width: 100%;
  max-width: 50rem;
  min-height: 15rem;
  height: 100%;
  max-height: 25rem;
`

export const ChartDepre = styled.div`
  min-width: 10rem;
  width: 100%;
  max-width: 50rem;
  min-height: 15rem;
  height: 100%;
  max-height: 25rem;
  margin-left: 0.2rem;
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 27px 30px 27px 30px;
  background: ${props => props.theme.colors.backgroundCalendary};
  color: ${props => props.theme.colors.text};
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 417px;
  margin-top: 25px;
`

export const Header = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  background: ${props => props.theme.colors.secondary};
`
export const Year = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colors.backgroundCalendary};
  &:hover {
    cursor: pointer;
  }
`
export const Image = styled.img`
  height: 15px;
  width: 15px;
  &:hover {
    cursor: pointer;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 12.5rem;
  max-height: 12.5rem;
  justify-content: center;
  margin-right: 30px;
`

export const Days = styled.div`
  max-width: 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  text-align: left;
`

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
`
export const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`

export const Number = styled.div`
  max-width: 7px;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  text-align: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start
  width: calc(40.16% - 10px);
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.secondary};
  gap: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  padding-top: 4px;
  padding-right: 7px;
  padding-bottom: 4px;
  padding-left: 7px;
  border-color: ${props => props.theme.colors.secondary};
  border-width: 1px;
  border-style: solid;
  background-color: ${props => props.theme.colors.backgroundCalendary};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundCalendary};
    background: ${props => props.theme.colors.secondary};
  }
`
export const StyledBtn = styled.div`
  display: flex;
  height: 25px;
  width: 7px;
  border-radius: 30px;
  background: ${props => props.theme.colors.secondary};
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: auto;
  max-width: 25rem;

  background: ${props => props.theme.colors.background};

  &.dropdown {
    width: 8rem;
  }
`

export const Nav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.text};
`

export const LogoMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;

  height: 3rem;
  margin: 0 1rem;

  h1 {
    padding-left: 1rem;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;

  height: 15rem;
  width: 100%;
  max-width: 25rem;
`

export const NavLink = styled(Link)`
  font-size: 8rem;
  color: ${props => props.theme.colors.text};
  background-color: wheat;
`

export const Dropdown = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${props => props.theme.colors.text};
  width: 1rem;
  padding-right: 1rem;
`
export const ThemeBox = styled.div`
  border: 1px red solid;
  width: 5rem;
`
export const ThemeButton = styled.button`
  font-size: 1rem;
`

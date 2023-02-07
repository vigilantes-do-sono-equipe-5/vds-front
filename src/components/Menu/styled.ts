import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 100vh;
  min-width: 6rem;
  width: 100%;
  max-width: 21rem;

  background: ${props => props.theme.menu.box};

  &.dropdown {
    width: 8rem;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.menu.text};
`

export const LogoMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-items: center;

  height: 3rem;
  margin: 0 1rem;

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    padding-left: 1rem;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 15rem;
  width: 100%;
  max-width: 25rem;
`

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  height: 5rem;
  width: 100%;

  color: ${props => props.theme.menu.text};

  &:hover {
    width: 100%;
    height: 5rem;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    background-color: black;
  }

  &.on {
    width: 100%;
    height: 5rem;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    background-color: ${props => props.theme.colors.secondary};
  }

  span {
    padding-right: 1rem;
  }
`
export const Icon = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  &.dropdown {
    align-items: center;
  }
`

export const Dropdown = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: ${props => props.theme.menu.text};
  font-size: 2rem;
  z-index: 100;
`
export const ThemeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const ThemeButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${props => props.theme.menu.text};
  border: none;
  font-size: 2rem;
  width: 8rem;
  padding-left: 0.5rem;
  .moon {
    font-size: 2rem;
    padding-left: 0.5rem;
  }
  .sun {
    padding-right: 0.5rem;
  }
`

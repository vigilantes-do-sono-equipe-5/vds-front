import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo'
import {
  Container,
  Dropdown,
  LogoMenu,
  Nav,
  NavMenu,
  ThemeBox,
  ThemeButton
} from './styled'

interface ITheme {
  changeTheme: () => void
}
interface INavbar {
  home: boolean
  chart: boolean
  message: boolean
  help: boolean
  toggle: boolean
}

export default function Menu({ changeTheme }: ITheme) {
  const [toggle, setToggle] = useState<boolean>(true)
  const [dropdown, setDropdown] = useState<boolean>(true)
  const [value, setValue] = useState<string>('true')
  const [menu, setMenu] = useState<INavbar>(Object)

  switch (value) {
    case 'home':
      setMenu({
        home: true,
        chart: false,
        message: false,
        help: false,
        toggle
      })
      break

    case 'chart':
      setMenu({ home: false, chart: true, message: false, help: false, toggle })
      break

    case 'message':
      setMenu({ home: false, chart: false, message: true, help: false, toggle })
      break

    case 'help':
      setMenu({ home: false, chart: false, message: false, help: true, toggle })
      break

    default:
      menu.home = false
      menu.chart = false
      menu.message = false
      menu.help = false
      menu.toggle = toggle
      break
  }

  return (
    <Container>
      <Nav className={dropdown ? 'dropdown' : ''}>
        <LogoMenu>
          <Logo />
          {dropdown ? <h1>Vigilantes do sono</h1> : ''}
        </LogoMenu>
        <NavMenu>
          <NavLink
            onClick={() => {
              setValue('home')
            }}
            to='/'>
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setValue('chart')
            }}
            to='/chart'>
            Gráfico
          </NavLink>
          <NavLink
            onClick={() => {
              setValue('message')
            }}
            to='/message'>
            Mensagem
          </NavLink>
          <NavLink
            onClick={() => {
              setValue('help')
            }}
            to='/help'>
            Ajuda
          </NavLink>
        </NavMenu>
        <ThemeBox>
          <ThemeButton
            onClick={() => {
              setToggle(!toggle)
            }}
            type='button'>
            teste
          </ThemeButton>
        </ThemeBox>
      </Nav>
      <Dropdown
        onClick={() => {
          setDropdown(!dropdown)
        }}
        type='button'>
        <BsArrowLeft />
      </Dropdown>
    </Container>
  )
}

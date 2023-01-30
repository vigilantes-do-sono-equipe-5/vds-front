import { useEffect, useState } from 'react'
import {
  BsBarChart,
  BsBarChartFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillEnvelopeFill,
  BsFillEnvelopeOpenFill,
  BsHouse,
  BsHouseFill,
  BsMoonStarsFill,
  BsQuestion,
  BsSunFill,
  BsToggle2Off,
  BsToggle2On
} from 'react-icons/bs'
import Logo from '../../assets/Logo'
import {
  Container,
  Dropdown,
  LogoMenu,
  Nav,
  NavLink,
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
  theme: boolean
}

export default function Menu({ changeTheme }: ITheme) {
  const [theme, setTheme] = useState<boolean>(true)
  const [dropdown, setDropdown] = useState<boolean>(true)
  const [menu, setMenu] = useState<INavbar>(Object)

  useEffect(() => {}, [])
  function handleClick(value: string) {
    switch (value) {
      case 'home':
        setMenu({
          home: true,
          chart: false,
          message: false,
          help: false,
          theme
        })
        break

      case 'chart':
        setMenu({
          home: false,
          chart: true,
          message: false,
          help: false,
          theme
        })
        break

      case 'message':
        setMenu({
          home: false,
          chart: false,
          message: true,
          help: false,
          theme
        })
        break

      case 'help':
        setMenu({
          home: false,
          chart: false,
          message: false,
          help: true,
          theme
        })
        break

      default:
        menu.home = false
        menu.chart = false
        menu.message = false
        menu.help = false
        menu.theme = theme
        break
    }
  }
  function toggleTheme() {
    changeTheme()
    setTheme(!theme)
  }

  return (
    <Container className={dropdown ? '' : 'dropdown'}>
      <Nav>
        <LogoMenu>
          <Logo />
          {dropdown ? <h1>Vigilantes do sono</h1> : ''}
        </LogoMenu>
        <NavMenu>
          <NavLink
            className={menu.home ? 'on' : ''}
            onClick={() => {
              handleClick('home')
            }}
            to='/'>
            <span className={dropdown ? 'dropdown' : ''}>
              {menu.home ? <BsHouseFill /> : <BsHouse />}
            </span>
            {dropdown ? 'Home' : ''}
          </NavLink>
          <NavLink
            className={menu.chart ? 'on' : ''}
            onClick={() => {
              handleClick('chart')
            }}
            to='/chart'>
            <span className={dropdown ? 'dropdown' : ''}>
              {menu.chart ? <BsBarChartFill /> : <BsBarChart />}
            </span>
            {dropdown ? 'Gráfico' : ''}
          </NavLink>
          <NavLink
            className={menu.message ? 'on' : ''}
            onClick={() => {
              handleClick('message')
            }}
            to='/message'>
            <span className={dropdown ? 'dropdown' : ''}>
              {menu.message ? (
                <BsFillEnvelopeOpenFill />
              ) : (
                <BsFillEnvelopeFill />
              )}
            </span>
            {dropdown ? 'Mensagem' : ''}
          </NavLink>
          <NavLink
            className={menu.help ? 'on' : ''}
            onClick={() => {
              handleClick('help')
            }}
            to='/help'>
            <span className={dropdown ? 'dropdown' : ''}>
              <BsQuestion />
            </span>
            {dropdown ? 'Ajuda' : ''}
          </NavLink>
        </NavMenu>
        <ThemeBox>
          <ThemeButton onClick={toggleTheme} type='button'>
            <BsSunFill className='sun' />
            {theme ? <BsToggle2On /> : <BsToggle2Off />}
            <BsMoonStarsFill className='moon' />
          </ThemeButton>
        </ThemeBox>
      </Nav>
      <Dropdown
        onClick={() => {
          setDropdown(!dropdown)
        }}
        type='button'>
        {dropdown ? <BsFillCaretLeftFill /> : <BsFillCaretRightFill />}
      </Dropdown>
    </Container>
  )
}

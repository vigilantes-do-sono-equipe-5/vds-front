import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProps
} from 'styled-components/macro'

const _SGlobalStyle: GlobalStyleComponent<
ThemeProps<DefaultTheme>,
DefaultTheme
> = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

export default _SGlobalStyle

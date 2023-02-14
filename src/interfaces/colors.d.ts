import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      success: string
      error: string
      text: string
      title: string
      line: string

      primary: string
      secondary: string
      callToAction: string
      accessory: string
      background: string
    }
    menu: {
      background: string
      text: string
    }
    box: {
      background: string
      hover: string
    }
  }
}

import 'styled-components'
declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      success: string
      error: string
      text: string
      title: string
      line: string
      box: string
      primary: string
      secondary: string
      callToAction: string
      accessory: string
      background: string
    }
    menu: {
      box: string
      text: string
    }
  }
}

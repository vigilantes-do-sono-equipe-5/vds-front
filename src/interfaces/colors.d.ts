import 'styled-components'
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
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
  }
}

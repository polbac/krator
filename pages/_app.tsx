import GlobalStyle from '../theme/global'
import theme from '../theme/index'
import { ThemeProvider } from 'styled-components'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp

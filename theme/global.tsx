import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
    height: 100%;
  }
  body {
    font: 400 16px "Syne Mono", sans-serif;
    height: 100%;
    font-size: 26px;
  }

  button,input{
    font: 400 16px "Syne Mono", sans-serif;
  }

  h1{
      font-size: 3rem;
  }
  
  #__next {
  height: 100%;
  }
`
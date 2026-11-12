import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root { font-synthesis: none; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; min-height: 100vh; overflow-x: hidden; }
  button, input { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { touch-action: manipulation; }
  a { text-decoration: none; }
  img { max-width: 100%; }
  ::selection { background: #111; color: #fff; }
  :focus-visible { outline: 3px solid rgba(90,120,255,.55); outline-offset: 3px; }
`

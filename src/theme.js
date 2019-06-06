import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
    secondary: {
      light: '#e7fff9',
      main: '#25c29d',
      dark: '#00916f',
    },
  },
  typography: {
    htmlFontSize: 10,
  },
})

export default theme

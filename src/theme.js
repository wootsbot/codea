import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5163ba',
    },
    secondary: {
      main: '#ffb300',
    },
  },
});

export default theme;

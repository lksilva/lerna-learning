import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8d62b0',
      main: '#713b9d',
      dark: '#4f296d',
      contrastText: '#fff'
    },
    secondary: {
      light: '#54c7c3',
      main: '#2ab9b4',
      dark: '#1d817d',
      contrastText: '#000'
    }
  }
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#22B771"
    },
    secondary: {
      main: "#1ADD43"
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Public Sans, sans-serif"
  }
});

export default theme;

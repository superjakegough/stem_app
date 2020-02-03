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
    },
    text: {
      primary: "#4D4D4D"
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif"
  }
});

export default theme;

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const UserTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#FFC107"
    },
    secondary: {
      main: "#07FFC1"
    },
    background: {
      default: "#303030"
    },
    type: "dark"
  }
};

export const setPrimary = (theme: ThemeOptions, color: string) => {
  theme = Object.assign({}, theme);
  if (theme.palette) {
    theme.palette.primary = { main: color };
  }
  return theme;
};
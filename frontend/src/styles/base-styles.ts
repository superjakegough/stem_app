import { makeStyles } from "@material-ui/styles";

export const useStylesBase = makeStyles({
  main: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    "& a": {
      color: "#22b771",
      textDecoration: "unset",
      wordBreak: "break-word"
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    "& li": {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    "& h6": {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      marginTop: 8,
      marginBottom: 8
    },
    "& .MuiExpansionPanel-root:before": {
      backgroundColor: "unset !important"
    },
    "& .MuiFilledInput-underline:before ": {
      borderBottom: "none !important"
    }
  },
});

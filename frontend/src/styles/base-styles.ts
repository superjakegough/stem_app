import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      "& a": {
        color: theme.palette.primary.main,
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
    primaryText: {
      color: theme.palette.primary.main
    },
    dialogTextField: {
      backgroundColor: "white !important"
    },
    textCenter: {
      textAlign: "center"
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mt6: {
      marginTop: theme.spacing(6)
    },
    mb2: {
      marginBottom: theme.spacing(2)
    },
    mb3: {
      marginBottom: theme.spacing(3)
    },
    mb6: {
      marginBottom: theme.spacing(6)
    },
    ml2: {
      marginLeft: theme.spacing(2)
    },
    headerGrid: {
      position: "relative"
    },
    fullHeight: {
      height: "100vh"
    },
    recLogo: {
      display: "flex",
      height: 100
    },
    blogShortContent: {
      maxHeight: 600,
      overflowY: "hidden",
      textOverflow: "ellipsis"
    },
    blogImage: {
      "& img": {
        display: "flex",
        margin: "auto",
        maxWidth: "100%"
      }
    }
  })
);

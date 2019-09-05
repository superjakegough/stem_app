import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      display: "flex",
      flexGrow: 1,
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
    },
    boldText: {
      fontWeight: 500
    },
    button: {
      margin: theme.spacing(1)
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    grid: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    contentContainer: {
      padding: theme.spacing(7),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    },
    headerImage: {
      height: "100vh",
      width: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        height: `calc(100vh - ${theme.spacing(7)})`
      }
    },
    headerText: {
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: theme.spacing(4),
      color: "#FCFCFC",
      fontSize: "3.5rem",
      fontWeight: 500,
      lineHeight: "3.5rem",
      letterSpacing: "0.00938em",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
        marginBottom: theme.spacing(7)
      }
    },
    homeLogo: {
      maxHeight: 220,
      [theme.breakpoints.down("md")]: {
        maxHeight: 180
      },
      [theme.breakpoints.down("sm")]: {
        maxHeight: 120
      }
    },
    contentTitle: {
      fontSize: "2.125rem",
      fontWeight: 500,
      lineHeight: 1.17,
      letterSpacing: "0.00735em",
      marginTop: 8,
      marginBottom: 8,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: 1.33,
        letterSpacing: 0,
        textAlign: "center"
      }
    },
  })
);

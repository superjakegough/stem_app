import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import stem from "../../assets/stem_green.png";
import first from "../../assets/icons/first.jpg";
import second from "../../assets/icons/second.jpg";
import third from "../../assets/icons/third.jpg";
import fourth from "../../assets/icons/fourth.jpg";
import fifth from "../../assets/icons/fifth.jpg";
import sixth from "../../assets/icons/sixth.jpg";
import seventh from "../../assets/icons/seventh.jpg";
import eighth from "../../assets/icons/eighth.jpg";
import ninth from "../../assets/icons/ninth.jpg";
import tenth from "../../assets/icons/tenth.jpg";
import eleventh from "../../assets/icons/eleventh.jpg";
import twelfth from "../../assets/icons/twelfth.jpg";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "calc(100vh - 64px)",
      backgroundColor: "#F2F2F2",
      padding: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        height: "calc(100vh - 108px)",
      }
    },
    logo: {
      width: "10%",
      maxWidth: 100
    },
    textContainer: {
      position: "absolute",
      top: "calc(50% - 64px)",
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        top: "calc(50% - 54px)",
      }
    },
    image: {
      width: "10%",
      maxWidth: 97,
      margin: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(1),
      }
    },
    text: {
      fontSize: 40,
      fontWeight: "bold",
      lineHeight: 1.2,
      letterSpacing: 0.24,
      whiteSpace: "pre-line",
      textAlign: "center",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        fontSize: 30
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 20
      }
    },
    title: {
      color: "#4D4D4D"
    },
    subtitle: {
      color: theme.palette.primary.main
    }
  })
);

interface HeaderProps {
  title: string;
  subtitle: string;
  home?: boolean;
  industry?: boolean;
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { title, subtitle, home, industry } = props;

  return (
    <div>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <img className={classes.image} src={first} alt="" />
            <img className={classes.image} src={second} alt="" />
            <img className={classes.image} src={third} alt="" />
          </Grid>
          <Grid container alignItems="center">
            <img className={classes.image} src={fourth} alt="" />
            <img className={classes.image} src={fifth} alt="" />
          </Grid>
          <Grid container alignItems="center">
            <img className={classes.image} src={sixth} alt="" />
          </Grid>
        </Grid>
        <div className={classes.textContainer}>
          <Grid container direction="column" alignItems="center">
            {home && <img className={classes.logo} src={stem} alt="stem-logo" />}
            <div className={clsx(classes.text, industry ? classes.subtitle : classes.title)}>{title}{!home && " -"}</div>
            <div className={clsx(classes.text, industry ? classes.title : classes.subtitle)}>{subtitle}</div>
          </Grid>
        </div>
        <Grid container item xs={12} alignContent="flex-end">
          <Grid container alignItems="center" justify="flex-end">
            <img className={classes.image} src={seventh} alt="" />
          </Grid>
          <Grid container alignItems="center" justify="flex-end">
            <img className={classes.image} src={eighth} alt="" />
            <img className={classes.image} src={ninth} alt="" />
          </Grid>
          <Grid container alignItems="center" justify="flex-end">
            <img className={classes.image} src={tenth} alt="" />
            <img className={classes.image} src={eleventh} alt="" />
            <img className={classes.image} src={twelfth} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

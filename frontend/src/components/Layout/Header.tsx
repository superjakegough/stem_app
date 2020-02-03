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
      backgroundColor: "#F2F2F2"
    },
    icon: {
      height: 100
    },
    textContainer: {
      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,
      margin: "auto"
    },
    image: {
      width: "5vw",
      margin: theme.spacing(2)
    },
    text: {
      fontSize: 48,
      fontWeight: "bold",
      lineHeight: 1.2,
      letterSpacing: 0.24
    },
    title: {
      color: theme.palette.primary.main
    },
    subtitle: {
      subtitle: "#4D4D4D"
    }
  })
);

interface HeaderProps {
  title: string;
  subtitle: string;
  home?: boolean;
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { title, subtitle, home } = props;

  return (
    <Grid container justify="space-between" className={classes.container}>
      <Grid item xs={12}>
        <Grid container>
          <img className={classes.image} src={first} alt="" />
          <img className={classes.image} src={second} alt="" />
          <img className={classes.image} src={third} alt="" />
        </Grid>
        <Grid container>
          <img className={classes.image} src={fourth} alt="" />
          <img className={classes.image} src={fifth} alt="" />
        </Grid>
        <Grid container>
          <img className={classes.image} src={sixth} alt="" />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.textContainer}>
        <Grid container direction="column" alignItems="center">
          {home && <img className={classes.icon} src={stem} alt="stem-logo" />}
          <div className={clsx(classes.text, classes.title)}>{title}</div>
          <div className={clsx(classes.text, classes.subtitle)}>{subtitle}</div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <img className={classes.image} src={seventh} alt="" />
        </Grid>
        <Grid container justify="flex-end">
          <img className={classes.image} src={eighth} alt="" />
          <img className={classes.image} src={ninth} alt="" />
        </Grid>
        <Grid container justify="flex-end">
          <img className={classes.image} src={tenth} alt="" />
          <img className={classes.image} src={eleventh} alt="" />
          <img className={classes.image} src={twelfth} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
}

import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useStylesBase from "../../styles/styles-base";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      backgroundColor: "#F2F2F2"
    },
    title: {
      color: "#4D4D4D"
    },
    subtitle: {
      subtitle: theme.palette.primary.main
    }
  })
);

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const { title, subtitle } = props;

  return (
    <>
      <div className={classesBase.toolbar} />
      <Grid container className={classes.container}>
        <img src={stem} alt="stem-logo" />
        <span className={classes.title}>{title}</span>
        <span className={classes.subtitle}>{subtitle}</span>
      </Grid>
    </>
  );
}

import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1
    }
  })
);

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation(props: NavigationProps) {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classesBase.base}>
      <TopAppBar />
      <main className={classes.content}>
        <div className={classesBase.toolbar} />
        {props.children}
      </main>
      {bottomNav}
    </div>
  );
}

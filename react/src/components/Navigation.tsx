import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const Navigation: React.FunctionComponent = props => {
  const classes = useStyles({});
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = small ? <BottomNav /> : undefined;

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
      {bottomNav}
    </div>
  );
};

export default Navigation;
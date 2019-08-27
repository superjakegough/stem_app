import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TopAppBar from "./TopAppBar";

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

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  );
};

export default Navigation;
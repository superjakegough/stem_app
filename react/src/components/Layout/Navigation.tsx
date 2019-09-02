import React, { FunctionComponent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    content: {
      flexGrow: 1
    }
  })
);

const Navigation: FunctionComponent = props => {
  const classes = useStyles({});
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classes.content}>{props.children}</main>
      {bottomNav}
    </div>
  );
};

export default Navigation;

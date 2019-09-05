import React, { FunctionComponent } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";
import { useStylesBase } from "../../styles/styles-base";

const useStyles = makeStyles({
  root: {
    display: "flex"
  }
});

const Navigation: FunctionComponent = props => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classesBase.main}>{props.children}</main>
      {bottomNav}
    </div>
  );
};

export default Navigation;

import React, { FunctionComponent } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles({
  content: {
    flexGrow: 1
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
    <div className={classesBase.base}>
      <TopAppBar />
      <main className={classes.content}>
        {props.children}
      </main>
      {bottomNav}
    </div>
  );
};

export default Navigation;

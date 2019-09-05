import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacer: {
    flex: "1 1 auto"
  }
});

const Spacer: FunctionComponent = () => {
  const classes = useStyles();

  return <div className={classes.spacer}></div>;
};

export default Spacer;

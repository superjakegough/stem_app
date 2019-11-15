import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacer: {
    flex: "1 1 auto"
  }
});

export default function Spacer() {
  const classes = useStyles();

  return <div className={classes.spacer}></div>;
}

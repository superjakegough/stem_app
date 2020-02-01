import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinkButton from "../Layout/LinkButton";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyHeader: {
      fontWeight: 500,
      marginBottom: theme.spacing(2)
    }
  })
);

export default function Industry() {
  const classes = useStyles();
  const classesBase = useStylesBase();

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={clsx(classesBase.contentContainer, classesBase.mt3)}
      >
        <Grid item sm={10} xs={12}>
        </Grid>
        <Grid item>
          <Grid container justify="center" className={classesBase.mb3}>
            <LinkButton to="/services">Services</LinkButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

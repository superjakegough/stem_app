import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import jobsimage from "../assets/jobs.jpg";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Jobs: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={jobsimage} className="header-image" alt=""/>
          <div className="header-text">Jobs</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jobs;

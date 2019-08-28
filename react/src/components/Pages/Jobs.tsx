import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import jobsimage from "../assets/jobs.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
  bodyText: {
    marginBottom: theme.spacing(1)
  },
}));

const Jobs: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={jobsimage} className="header-image" alt=""/>
          <div className="header-text">Jobs</div>
        </Grid>
        <Grid container justify="center" className="content-container">
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <h2 className="content-title mb-24">Current Opportunities</h2>
            <Typography className={classes.bodyText}>Interested in any of the below opportunities? To apply, please send your CV to
            <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk.</a> with the job reference number, and we will respond within 2 working days.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jobs;

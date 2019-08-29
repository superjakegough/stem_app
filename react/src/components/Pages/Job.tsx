import React, { useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Job from "../../models/job";
import { GetJob } from "../../services/job_service";
import { ConvertDate } from "../../helpers/DateHelper";

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const Jobs: React.FunctionComponent<RouteComponentProps> = props => {
  const classes = useStyles({});
  const [job, setJob] = React.useState<Job>({
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    jobLocation: "",
    jobReference: "",
    description: "",
    jobFilled: "",
    createdAt: ""
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const params: any = props.match.params;

  useEffect(() => {
    fetchJob();
  }, [job.jobId]);

  async function fetchJob() {
    setLoading(true);
    const result = await GetJob(params.id);
    if (result) {
      setJob(result);
    }
    setLoading(false);
  }

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper key={job.jobId} elevation={0} className={classes.paper}>
      <Typography variant="h6" color="primary" className="text-center">
        {job.title}
      </Typography>
      <Typography variant="h6">
        Salary - Benefits
      </Typography>
      <Typography>
        {`${job.salary} - ${job.benefits}`}
      </Typography>
      <Typography variant="h6">
        Type
      </Typography>
      <Typography>
        {job.jobType}
      </Typography>
      <Typography variant="h6">
        Location
      </Typography>
      <Typography>
        {job.jobLocation}
      </Typography>
      <Typography variant="h6">
        Reference
      </Typography>
      <Typography>
        {job.jobReference}
      </Typography>
      <Typography dangerouslySetInnerHTML={{__html: job.description}}>
      </Typography>
      <Typography>Published: {ConvertDate(job.createdAt)}</Typography>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className="content-container">
        <Grid item md={8} sm={10} xs={12} className="mb-24">
          {content}
        </Grid>
        <Grid container justify="center" className="mb-48">
          <Button className={classes.button} color="primary" component={Link} to="/jobs">Jobs</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Jobs);

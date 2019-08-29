import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import jobsimage from "../../assets/jobs.jpg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Job from "../../models/job";
import { GetAllJobs } from "../../services/job_service";
import { ConvertDate } from "../../helpers/DateHelper";

const useStyles = makeStyles((theme: Theme) => createStyles({
  bodyText: {
    marginBottom: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  },
  textField: {
    flexBasis: 200,
    marginBottom: theme.spacing(4),
  },
}));

const Jobs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(3);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  useEffect(() => {
    FetchJobs();
  }, [jobs.length]);

  async function FetchJobs() {
    setLoading(true);
    const result = await GetAllJobs();
    if (result) {
      setJobs(result);
      setFilteredJobs(result);
    }
    setLoading(false);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const regex = new RegExp(`^.*${searchTerm}.*$`, "i");
    setPage(0);
    if (!searchTerm) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => regex.test(job.title)));
    }
  }

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredJobs.map((job: Job) => {
        return (
          <div key={job.jobId}>
            <Paper elevation={0} className={classes.paper}>
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
              <Grid container justify="center">
                <Button className={classes.button} color="primary" component={Link} to={{ pathname: `/job/${job.jobId}`}}>View</Button>
              </Grid>
            </Paper>
          </div>
        );
      })}
    </>
  );

  const pagination = filteredJobs.length > 0 ? (
    <TablePagination
      rowsPerPageOptions={[3, 5, 10]}
      component="div"
      count={filteredJobs.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  ) : (
    <Paper elevation={0} className={classes.paper}>
      <Typography className="text-center">
        No jobs found
      </Typography>
    </Paper>
  );

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
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <form onSubmit={handleSubmitSearch}>
              <TextField
                className={classes.textField}
                variant="filled"
                margin="dense"
                fullWidth
                hiddenLabel
                onChange={e => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon color="primary"/></InputAdornment>,
                }}
              />
            </form>
            {content}
            {pagination}
          </Grid>
        </Grid>
    </div>
  );
};

export default withRouter(Jobs);

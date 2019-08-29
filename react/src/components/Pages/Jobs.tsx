import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import jobsimage from "../../assets/jobs.jpg";
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
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4)
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
    fetchJobs();
  }, [jobs.length]);

  async function fetchJobs() {
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
  }

  function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const regex = new RegExp(`^.*${searchTerm}.*$`, "i");
    if (!searchTerm) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => regex.test(job.title)));
    }
  }

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
      <p className="text-center">
        No jobs found
      </p>
    </Paper>
  );

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredJobs
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((job: Job) => {
        return (
          <div key={job.jobId}>
            <Paper elevation={0} className={classes.paper}>
              <h6 className="primary-text text-center">
                {job.title}
              </h6>
              <h6>
                Salary - Benefits
              </h6>
              <p>
                {`${job.salary} - ${job.benefits}`}
              </p>
              <h6>
                Type
              </h6>
              <p>
                {job.jobType}
              </p>
              <h6>
                Location
              </h6>
              <p>
                {job.jobLocation}
              </p>
              <h6>
                Reference
              </h6>
              <p>
                {job.jobReference}
              </p>
              <p>Published: {ConvertDate(job.createdAt)}</p>
              <Grid container justify="center">
                <Button className={classes.button} color="primary" component={Link} to={{ pathname: `/job/${job.jobId}`}}>View</Button>
              </Grid>
            </Paper>
          </div>
        );
      })}
      {pagination}
    </>
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
            <p>Interested in any of the below opportunities? To apply, please send your CV to {" "}
            <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk</a> with the job reference number, and we will respond within 2 working days.</p>
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Jobs);

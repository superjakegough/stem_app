import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Toolbar from "@material-ui/core/Toolbar";
import Spacer from "../Layout/Spacer";
import CreateEditJob from "../Dialogs/CreateEditJob";
import Job from "../../models/job";
import { GetAllJobs } from "../../services/job_service";

const useStyles = makeStyles((theme: Theme) => createStyles({
  boldText: {
    fontWeight: 500
  },
  button: {
    margin: theme.spacing(1)
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  icon: {
    color: "#9e9e9e"
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
}));

const AdminJobs: React.FunctionComponent = props => {
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
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [openCreateEdit, setCreateEdit] = React.useState<boolean>(false);
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  React.useEffect(() => {
    fetchJobs();
  }, [jobs.length]);

  async function fetchJobs() {
    setLoading(true);
    const result = await GetAllJobs();
    if (result) {
      setJobs(result);
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

  function handleCreateEditClose() {
    setCreateEdit(false);
  }

  function handleCreate(job: Job) {
    console.log(job);
    setCreateEdit(false);
  }

  function handleUpdate(job: Job) {
    console.log(job);
    setCreateEdit(false);
  }

  const table = smAndDown ? (
    <div className="mb-48">
      {jobs
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(job => (
        <Paper key={job.jobId} className={classes.paper}>
          <Toolbar>
            <p className={classes.boldText}>{job.title}</p>
            <Spacer />
            <IconButton size="small">
              <EditIcon className={classes.icon} />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon className={classNames(classes.icon)}/>
            </IconButton>
          </Toolbar>
          <Divider className={classes.divider} />
          <Grid container justify="space-between" className={classes.grid}>
            <p className={classes.boldText}>Type:</p>
            <p>{job.jobType}</p>
          </Grid>
          <Grid container justify="space-between" className={classes.grid}>
            <p className={classes.boldText}>Location:</p>
            <p>{job.jobLocation}</p>
          </Grid>
          <Grid container justify="space-between" className={classes.grid}>
            <p className={classes.boldText}>Reference:</p>
            <p>{job.jobReference}</p>
          </Grid>
        </Paper>
      ))}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={jobs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  ) : (
    <Paper className={classes.paper}>
      <Toolbar>
        <h6>Jobs</h6>
        <Spacer />
        <Button className={classes.button} color="primary" onClick={() => setCreateEdit(true)}>Create</Button>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Reference</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(job => (
            <TableRow key={job.jobId}>
              <TableCell component="th" scope="row">
                {job.title}
              </TableCell>
              <TableCell align="right">{job.jobType}</TableCell>
              <TableCell align="right">{job.jobLocation}</TableCell>
              <TableCell align="right">{job.jobReference}</TableCell>
              <TableCell align="right">
                <IconButton size="small">
                  <EditIcon className={classes.icon} />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon className={classNames(classes.icon)}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={jobs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    table
  );

  return (
    <div>
      <Grid container justify="center" alignItems="center" className="content-container admin-table">
        <Grid item md={10} sm={10} xs={12}>
          {content}
        </Grid>
        <CreateEditJob
          open={openCreateEdit}
          job={job}
          handleClose={handleCreateEditClose}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      </Grid>
    </div>
  );
};

export default AdminJobs;

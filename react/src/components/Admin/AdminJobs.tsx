import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
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
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Job from "../../models/job";
import { GetAllJobs } from "../../services/job_service";
import Toolbar from "@material-ui/core/Toolbar";
import Spacer from "../Layout/Spacer";

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: "auto",
  },
  toolbar: {
    width: "100%"
  }
}));

const AdminJobs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
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

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Toolbar className={classes.toolbar}>
              <h6>Jobs</h6>
              <Button className={classes.button} color="primary">Create</Button>
          </Toolbar>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Benefits</TableCell>
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
              <TableCell align="right">{job.salary}</TableCell>
              <TableCell align="right">{job.benefits}</TableCell>
              <TableCell align="right">{job.jobType}</TableCell>
              <TableCell align="right">{job.jobLocation}</TableCell>
              <TableCell align="right">{job.jobReference}</TableCell>
              <TableCell align="right">
                <EditIcon color="primary"/>
                <DeleteIcon color="primary"/>
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

  return (
    <div>
      <Grid container justify="center" alignItems="center" className="content-container admin-table">
        <Grid item xs={10}>
          {content}
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminJobs;

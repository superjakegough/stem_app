import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Job from "../../models/job";
import { GetAllJobs } from "../../services/job_service";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const AdminJobs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [jobs, setJobs] = React.useState<Job[]>([]);
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
    }
    setLoading(false);
  }

  return (
    <div>
      <Grid container direction="column" justify="center">
      </Grid>
    </div>
  );
};

export default AdminJobs;

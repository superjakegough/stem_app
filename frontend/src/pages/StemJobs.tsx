import React, {
  useState,
  useEffect,
  ChangeEvent
} from "react";
import Grid from "@material-ui/core/Grid";
import jobsimage from "../assets/jobs.jpg";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../components/Layout/LinkButton";
import SearchDialog from "../components/Dialogs/SearchDialog";
import { Job } from "../models/job";
import { GetAllJobs } from "../services/job_service";
import { ConvertDate } from "../helpers/DateHelper";
import useStylesBase from "../styles/styles-base";
import clsx from "clsx";

export default function StemJobs() {
  const classesBase = useStylesBase();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  useEffect(() => {
    fetchJobs();
  }, [jobs.length]);

  async function fetchJobs() {
    setLoading(true);
    const result: Job[] = await GetAllJobs();
    if (result) {
      setJobs(result);
      setFilteredJobs(result);
    }
    setLoading(false);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
  }

  function handleOpenSearch() {
    setOpenSearch(true);
  }

  function handleCloseSearch() {
    setOpenSearch(false);
  }

  function handleSubmitSearch(filteredJobs: Job[], searchTerm: string) {
    setFilteredJobs(filteredJobs);
    setSearchTerm(searchTerm);
    setOpenSearch(false);
  }

  const pagination =
    filteredJobs.length > 0 ? (
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filteredJobs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={""}
      />
    ) : (
      <Paper elevation={0} className={classesBase.stemPaper}>
        <p className={classesBase.textCenter}>No jobs found</p>
      </Paper>
    );

  const content = loading ? (
    <Grid
      container
      justify="center"
      className={clsx(classesBase.mt3, classesBase.mb3)}
    >
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredJobs
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((job: Job) => {
          return (
            <div key={job.jobId}>
              <Paper elevation={0} className={classesBase.stemPaper}>
                <h6
                  className={clsx(
                    classesBase.primaryText,
                    classesBase.textCenter
                  )}
                >
                  {job.title}
                </h6>
                <h6>Salary - Benefits</h6>
                <p>{`${job.salary} - ${job.benefits}`}</p>
                <h6>Type</h6>
                <p>{job.jobType}</p>
                <h6>Location</h6>
                <p>{job.jobLocation}</p>
                <h6>Reference</h6>
                <p>{job.jobReference}</p>
                <p>Published: {ConvertDate(job.createdAt)}</p>
                <Grid container justify="center">
                  <LinkButton
                    className={classesBase.button}
                    to={{ pathname: `/job/${job.jobId}` }}
                  >
                    View
                  </LinkButton>
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
          <img src={jobsimage} className={classesBase.headerImage} alt="" />
          <div className={classesBase.headerText}>Jobs</div>
        </Grid>
        <Grid
          container
          justify="center"
          className={classesBase.contentContainer}
        >
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>
              Current Opportunities
            </h4>
            <p>
              Interested in any of the below opportunities provided by Stem Skills &amp; Recruitment? To apply, please
              send your CV to{" "}
              <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk</a>{" "}
              with the job reference number, and we will respond within 2
              working days.
            </p>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <div onClick={handleOpenSearch}>
              <TextField
                className={clsx(
                  classesBase.textField,
                  classesBase.whiteTextField
                )}
                variant="filled"
                margin="dense"
                fullWidth
                hiddenLabel
                value={searchTerm}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            {content}
          </Grid>
        </Grid>
      </Grid>
      <SearchDialog
        open={openSearch}
        jobs={jobs}
        handleClose={handleCloseSearch}
        handleSearch={handleSubmitSearch}
      />
    </div>
  );
}

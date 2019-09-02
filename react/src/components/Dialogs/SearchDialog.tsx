import React, { FunctionComponent, useState, useEffect, ChangeEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Job, BlankJob } from "../../models/job";
import { checkJob, generateSearchTerm } from "../../helpers/SearchHelper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      "& .MuiPaper-elevation24": {
        boxShadow: "none"
      }
    },
    textField: {
      marginBottom: theme.spacing(4),
      "& .MuiFilledInput-root": {
        borderRadius: 4
      },
      "& .MuiFilledInput-underline:before": {
        borderBottom: 0
      },
      "& .MuiFilledInput-underline:after": {
        marginRight: 2,
        marginLeft: 2,
        borderRadius: 4
      }
    },
    select: {
      marginBottom: theme.spacing(4),
      "& .MuiInputBase-root": {
        borderRadius: 4,
        backgroundColor: "#E8E8E8",
      }
    }
  })
);

interface JobDialogProps {
  open: boolean;
  handleClose: () => void;
  handleSearch: (jobs: Job[], searchTerm: string) => void;
  jobs: Job[];
}

const JobDialog: FunctionComponent<JobDialogProps> = props => {
  const classes = useStyles({});
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [jobLocations, setJobLocations] = useState<string[]>([]);
  const [searchJob, setSearchJob] = useState<Job>(BlankJob());
  const salaries: string[] = [
    "£20,000+",
    "£25,000+",
    "£30,000+",
    "£35,000+",
    "£40,000+",
    "£45,000+",
    "£50,000+",
  ];

  useEffect(() => {
    setJobs(props.jobs);
    populateSets();
  }, [props.jobs.length]);

  function handleSearch() {
    const searchTerm: string = generateSearchTerm(searchJob);
    let filteredJobs: Job[];
    if (searchTerm) {
      filteredJobs = jobs.filter(job => checkJob(searchJob, job));
    } else {
      filteredJobs = jobs;
    }
    props.handleSearch(filteredJobs, searchTerm);
  }

  function populateSets() {
    const jobTypesSet: Set<string> = new Set<string>();
    const jobLocationsSet: Set<string> = new Set<string>();

    for (let i = 0; i < props.jobs.length; i++) {
      jobTypesSet.add(props.jobs[i].jobType);
      jobLocationsSet.add(props.jobs[i].jobLocation);
    }
    setJobTypes(Array.from(jobTypesSet));
    setJobLocations(Array.from(jobLocationsSet));
  }

  function handleReset() {
    setSearchJob(BlankJob());
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={classes.dialog}
    >
      <DialogContent>
        <TextField
          className={classes.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchJob({ ...searchJob, title: event.target.value })}
        />
        {/* <Select
          className={classes.select}
          name="Salary"
          variant="filled"
          fullWidth
          value={searchJob.salary}
          onChange={() => {}}
        >
        </ Select> */}
        <TextField
          className={classes.textField}
          label="Type"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.jobType}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchJob({ ...searchJob, jobType: event.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.jobLocation}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchJob({ ...searchJob, jobLocation: event.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Reference"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.jobReference}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchJob({ ...searchJob, jobReference: event.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleReset} color="primary">
          Reset
        </Button>
        <Button
          onClick={handleSearch}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDialog;

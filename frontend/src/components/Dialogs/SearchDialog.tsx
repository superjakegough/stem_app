import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent
} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Job, BlankJob } from "../../models/job";
import { checkJob, generateSearchTerm } from "../../helpers/SearchHelper";
import FormControl from "@material-ui/core/FormControl";
import useStylesBase from "../../styles/styles-base";

interface JobDialogProps {
  open: boolean;
  handleClose: () => void;
  handleSearch: (jobs: Job[], searchTerm: string) => void;
  jobs: Job[];
}

const JobDialog: FunctionComponent<JobDialogProps> = props => {
  const classesBase = useStylesBase();
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
    "£50,000+"
  ];

  useEffect(() => {
    setJobs(props.jobs);
    populateSets();
  }, [props.jobs]);

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
      className={classesBase.dialog}
    >
      <DialogContent>
        <TextField
          className={classesBase.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchJob({ ...searchJob, title: event.target.value })
          }
        />
        <FormControl variant="filled" fullWidth className={classesBase.select}>
          <InputLabel htmlFor="search-job-salary">Salary</InputLabel>
          <Select
            value={searchJob.salary}
            onChange={(
              event: ChangeEvent<{ name?: string; value: unknown }>
            ) => {
              setSearchJob({
                ...searchJob,
                salary: event.target.value as string
              });
            }}
            input={
              <FilledInput id="search-job-salary" margin="dense" fullWidth />
            }
          >
            <MenuItem value={""}>None</MenuItem>
            {salaries.map((salary: string) => (
              <MenuItem key={salary} value={salary}>
                {salary}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth className={classesBase.select}>
          <InputLabel htmlFor="search-job-types">Type</InputLabel>
          <Select
            value={searchJob.jobType}
            onChange={(
              event: ChangeEvent<{ name?: string; value: unknown }>
            ) => {
              setSearchJob({
                ...searchJob,
                jobType: event.target.value as string
              });
            }}
            input={
              <FilledInput id="search-job-types" margin="dense" fullWidth />
            }
          >
            <MenuItem value={""}>None</MenuItem>
            {jobTypes.map((jobType: string) => (
              <MenuItem key={jobType} value={jobType}>
                {jobType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth className={classesBase.select}>
          <InputLabel htmlFor="search-job-locations">Location</InputLabel>
          <Select
            value={searchJob.jobLocation}
            onChange={(
              event: ChangeEvent<{ name?: string; value: unknown }>
            ) => {
              setSearchJob({
                ...searchJob,
                jobLocation: event.target.value as string
              });
            }}
            input={
              <FilledInput id="search-job-locations" margin="dense" fullWidth />
            }
          >
            <MenuItem value={""}>None</MenuItem>
            {jobLocations.map((jobLocation: string) => (
              <MenuItem key={jobLocation} value={jobLocation}>
                {jobLocation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classesBase.textField}
          label="Reference"
          variant="filled"
          margin="dense"
          fullWidth
          value={searchJob.jobReference}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchJob({ ...searchJob, jobReference: event.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleReset} color="primary">
          Reset
        </Button>
        <Button onClick={handleSearch} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDialog;

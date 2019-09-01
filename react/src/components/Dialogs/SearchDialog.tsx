import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Job from "../../models/job";

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
    }
  })
);

interface JobDialogProps {
  open: boolean;
  handleClose: () => void;
  handleSearch: (jobs: Job[], searchTerm: string) => void;
  jobs: Job[];
  benefits: string[];
  jobTypes: string[];
  jobLocations: string[];
}

const JobDialog: React.FunctionComponent<JobDialogProps> = props => {
  const classes = useStyles({});
  const [jobs, setJobs] = React.useState<Job[]>(props.jobs);
  const [job, setJob] = React.useState<Job>({
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    jobLocation: "",
    jobReference: "",
    description: "",
    jobFilled: "false",
    createdAt: ""
  });
  const salaries: string[] = [
    "£20,000+",
    "£25,000+",
    "£30,000+",
    "£35,000+",
    "£40,000+",
    "£45,000+",
    "£50,000+",
  ];

  function handleSearch() {
    const searchTerm: string = "";
    props.handleSearch(jobs, searchTerm);
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={classes.dialog}
      disableBackdropClick={true}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogContent>
        <TextField
          className={classes.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob({ ...job, title: event.target.value })}
        />
        <Select
          className={classes.select}
          name="Salary"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.salary}
          onChange={(event: React.ChangeEvent<{ name?: string; value: string }>) => setJob({ ...job, salary: event.target.value })}
        >
          {salaries.map((salary: string) => {
            <>
            {salary}
            </>;
          })}
        </ Select>
        <TextField
          className={classes.textField}
          label="Benefits"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.benefits}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob({ ...job, benefits: event.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Type"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobType}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob({ ...job, jobType: event.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobLocation}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob({ ...job, jobLocation: event.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Reference"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobReference}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob({ ...job, jobReference: event.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
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

import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Job from "../../models/job";

const useStyles = makeStyles((theme: Theme) => createStyles({
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
}));

interface CreateEditJobProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (job: Job) => void;
  handleUpdate: (job: Job) => void;
  job: Job;
}

const CreateEditJob: React.FunctionComponent<CreateEditJobProps> = props => {
  const classes = useStyles({});
  const [job, setJob] = React.useState<Job>(props.job);

  React.useEffect(() => {
    setJob(props.job);
  }, [props.job]);

  const title: string = props.job.title ? "Update Job" : "Create Job";

  function handleSubmit() {
    if (props.job.title) {
      props.handleUpdate(job);
    } else {
      props.handleCreate(job);
    }
  }

  function validateDialog() {
    if (job.title && job.salary && job.benefits && job.jobType
      && job.jobLocation && job.jobReference && job.description) {
        return false;
      } else {
        return true;
      }
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose} className={classes.dialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.title}
          onChange={e => setJob({...job, title: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Salary"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.salary}
          onChange={e => setJob({...job, salary: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Benefits"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.benefits}
          onChange={e => setJob({...job, benefits: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Type"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobType}
          onChange={e => setJob({...job, jobType: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobLocation}
          onChange={e => setJob({...job, jobLocation: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Reference"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobReference}
          onChange={e => setJob({...job, jobReference: e.target.value})}
        />
        <TextField
          className={classes.textField}
          label="Description"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.description}
          onChange={e => setJob({...job, description: e.target.value})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={validateDialog()}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEditJob;
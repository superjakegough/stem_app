import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Job from "../../models/job";

const useStyles = makeStyles((theme: Theme) => createStyles({
  dialog: {
    "& .MuiPaper-elevation24": {
      boxShadow: "none"
    }
  },
  textField: {
    flexBasis: 200,
    marginBottom: theme.spacing(4),
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

  const title: string = props.job ? "Create Job" : "Update Job";

  function handleSubmit() {
    if (props.job) {
      props.handleUpdate(job);
    } else {
      props.handleCreate(job);
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
            onChange={e => setJob({...job, title: e.target.value})}
          />
          <TextField
            className={classes.textField}
            label="Salary"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setJob({...job, salary: e.target.value})}
          />
          <TextField
            className={classes.textField}
            label="Benefits"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setJob({...job, benefits: e.target.value})}
          />
          <TextField
            className={classes.textField}
            label="Type"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setJob({...job, jobType: e.target.value})}
          />
          <TextField
            className={classes.textField}
            label="Location"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setJob({...job, jobLocation: e.target.value})}
          />
          <TextField
            className={classes.textField}
            label="Reference"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setJob({...job, jobReference: e.target.value})}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEditJob;
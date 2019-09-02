import React, { FunctionComponent, useState, useEffect, ChangeEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RichEditor from "../Layout/RichEditor";
import { Job } from "../../models/job";

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
    }
  })
);

interface JobDialogProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (job: Job) => void;
  handleUpdate: (job: Job) => void;
  job: Job;
}

const JobDialog: FunctionComponent<JobDialogProps> = props => {
  const classes = useStyles({});
  const [job, setJob] = useState<Job>(props.job);

  useEffect(() => {
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

  function handleSetDescription(description: string) {
    setJob({ ...job, description: description });
  }

  function validateDialog() {
    if (
      job.title &&
      job.salary &&
      job.benefits &&
      job.jobType &&
      job.jobLocation &&
      job.jobReference &&
      job.description
    ) {
      return false;
    } else {
      return true;
    }
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
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, title: event.target.value })
          }
        />
        <TextField
          className={classes.textField}
          label="Salary"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.salary}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, salary: event.target.value })
          }
        />
        <TextField
          className={classes.textField}
          label="Benefits"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.benefits}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, benefits: event.target.value })
          }
        />
        <TextField
          className={classes.textField}
          label="Type"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobType}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, jobType: event.target.value })
          }
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobLocation}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, jobLocation: event.target.value })
          }
        />
        <TextField
          className={classes.textField}
          label="Reference"
          variant="filled"
          margin="dense"
          fullWidth
          value={job.jobReference}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setJob({ ...job, jobReference: event.target.value })
          }
        />
        <RichEditor
          content={job.description}
          handleSetContent={handleSetDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={validateDialog()}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDialog;

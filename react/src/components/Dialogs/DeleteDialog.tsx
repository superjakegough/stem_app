import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      "& .MuiPaper-elevation24": {
        boxShadow: "none"
      }
    }
  })
);

interface DeleteProps {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteDialog: React.FunctionComponent<DeleteProps> = props => {
  const classes = useStyles({});

  function handleSubmit() {
    props.handleDelete();
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={classes.dialog}
    >
      <DialogContent>
        <p>Are you sure you wish to delete this item?</p>
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

export default DeleteDialog;

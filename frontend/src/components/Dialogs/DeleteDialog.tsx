import React, { FunctionComponent } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useStylesBase } from "../../styles/styles-base";

interface DeleteProps {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteDialog: FunctionComponent<DeleteProps> = props => {
  const classesBase = useStylesBase();

  function handleSubmit() {
    props.handleDelete();
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={classesBase.dialog}
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

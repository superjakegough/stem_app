import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DraftEditor from "../Layout/DraftEditor";
import Blog from "../../models/blog";

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

interface BlogDialogProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (blog: Blog) => void;
  handleUpdate: (blog: Blog) => void;
  blog: Blog;
}

const BlogDialog: React.FunctionComponent<BlogDialogProps> = props => {
  const classes = useStyles({});
  const [blog, setBlog] = React.useState<Blog>(props.blog);

  React.useEffect(() => {
    setBlog(props.blog);
  }, [props.blog]);

  const title: string = props.blog.title ? "Update Blog" : "Create Blog";

  function handleSubmit() {
    if (props.blog.title) {
      props.handleUpdate(blog);
    } else {
      props.handleCreate(blog);
    }
  }

  function validateDialog() {
    if (blog.title && blog.description && blog.content) {
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
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={blog.title}
          onChange={e => setBlog({ ...blog, title: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Description"
          variant="filled"
          margin="dense"
          fullWidth
          value={blog.description}
          onChange={e => setBlog({ ...blog, description: e.target.value })}
        />
        <DraftEditor content={blog.content} />
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

export default BlogDialog;

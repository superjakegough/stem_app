import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent
} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RichEditor from "../Layout/RichEditor";
import { Blog } from "../../models/blog";
import useStylesBase from "../../styles/styles-base";

interface BlogDialogProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (blog: Blog) => void;
  handleUpdate: (blog: Blog) => void;
  blog: Blog;
}

const BlogDialog: FunctionComponent<BlogDialogProps> = props => {
  const classesBase = useStylesBase();
  const [blog, setBlog] = useState<Blog>(props.blog);

  useEffect(() => {
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

  function handleSetContent(content: string) {
    setBlog({ ...blog, content: content });
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
      className={classesBase.dialog}
      disableBackdropClick={true}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          className={classesBase.textField}
          label="Title"
          variant="filled"
          margin="dense"
          fullWidth
          value={blog.title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setBlog({ ...blog, title: event.target.value })
          }
        />
        <TextField
          className={classesBase.textField}
          label="Description"
          variant="filled"
          margin="dense"
          fullWidth
          value={blog.description}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setBlog({ ...blog, description: event.target.value })
          }
        />
        <RichEditor
          content={blog.content}
          handleSetContent={handleSetContent}
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

export default BlogDialog;

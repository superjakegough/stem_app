import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      backgroundColor: "#E8E8E8",
      borderRadius: 8,
      padding: theme.spacing(2),
      maxHeight: 500,
      overflowY: "scroll",
      "& .ql-toolbar": {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: theme.spacing(1)
      },
      "& .ql-container": {
        border: "unset"
      },
      "& .ql-tooltip": {
        position: "unset",
        border: "unset",
        borderRadius: 8,
        boxShadow: "none"
      }
    },
  })
);

interface RichEditorProps {
  content: string;
}

const RichEditor: React.FunctionComponent<RichEditorProps> = props => {
  const classes = useStyles({});

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", { list: "ordered" }, { list: "bullet" }, "link", "image"]
    ]
  };

  const formats = ["bold", "italic", "underline", "list", "bullet", "link", "image"];

  function onChange(content: any, delta: any, source: any, editor: any) {
    console.log(editor.getHTML());
  }

  return (
    <div className={classes.editor}>
      <ReactQuill
        modules={modules}
        formats={formats}
        onChange={onChange}
        value={props.content}
      />
    </div>
  );
};

export default RichEditor;

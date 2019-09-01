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
  handleSetContent: (content: string) => void;
}

const RichEditor: React.FunctionComponent<RichEditorProps> = props => {
  const classes = useStyles({});
  const [editor, setEditor] = React.useState<any>();
  const [content, setContent] = React.useState<string>(props.content);

  const imageHandler = () => {
    const value = prompt("What is the image URL");
    const quill = editor.getEditor();
    if (value) {
        quill.insertEmbed(quill.getSelection(), "image", value);
    }
  };

  const modules = {
    toolbar: {
      container: [["bold", "italic", "underline", { list: "ordered" }, { list: "bullet" }, "link", "image"]],
      handlers: {
        image: imageHandler
      }
    }
  };

  const formats = ["bold", "italic", "underline", "list", "bullet", "link", "image"];

  function onChange(content: any, delta: any, source: any, editor: any) {
    // props.handleSetContent(editor.getHTML());
  }

  return (
    <div className={classes.editor}>
      <ReactQuill
        ref={(el) => setEditor(el)}
        modules={modules}
        formats={formats}
        onChange={onChange}
        value={content}
      />
    </div>
  );
};

export default RichEditor;

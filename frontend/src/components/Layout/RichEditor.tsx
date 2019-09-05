import React, { FunctionComponent, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import RichTextEditor, { EditorValue } from "react-rte";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      backgroundColor: "#E8E8E8",
      border: "none",
      borderRadius: 4,
      fontSize: "1rem",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      "& button": {
        border: "none",
        background: "none"
      }
    },
    editorBody: {
      maxHeight: 500,
      overflowY: "scroll",
      padding: theme.spacing(1)
    }
  })
);

interface RichEditorProps {
  content: string;
  handleSetContent: (content: string) => void;
}

const RichEditor: FunctionComponent<RichEditorProps> = props => {
  const classes = useStyles();
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createValueFromString(props.content, "html")
  );

  function onChange(value: EditorValue) {
    setValue(value);
    props.handleSetContent(value.toString("html"));
  }

  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      className={classes.editor}
      editorClassName={classes.editorBody}
    />
  );
};

export default RichEditor;

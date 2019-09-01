import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Editor, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      backgroundColor: "#E8E8E8",
      borderRadius: 8,
      padding: theme.spacing(2),
      maxHeight: 500,
      overflowY: "scroll"
    }
  })
);

interface DraftEditorProps {
  content: string;
}

const DraftEditor: React.FunctionComponent<DraftEditorProps> = props => {
  const classes = useStyles({});
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  const editor: any = React.useRef(undefined);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor} className={classes.editor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => {
          setEditorState(editorState);
          console.log(stateToHTML(editorState.getCurrentContent()));
        }}
      />
    </div>
  );
};

export default DraftEditor;

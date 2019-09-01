import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import { Editor, EditorState, RichUtils } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    editor: {
      backgroundColor: "#E8E8E8",
      borderRadius: 8,
      padding: theme.spacing(2),
      maxHeight: 500,
      overflowY: "scroll"
    },
    icon: {
      marginRight: theme.spacing(1)
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

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  function toggleRichUtil(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, util: string) {
    event.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, util));
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor} className={classes.editor}>
      <div>
        <IconButton size="small" className={classes.icon} onMouseDown={(event) => toggleRichUtil(event, "BOLD")}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <FormatListBulletedIcon />
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <FormatListNumberedIcon />
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <InsertLinkIcon />
        </IconButton>
        <IconButton size="small" className={classes.icon}>
          <InsertPhotoIcon />
        </IconButton>
      </div>
      <Divider className={classes.divider} />
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  );
};

export default DraftEditor;

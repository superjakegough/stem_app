import { Component, Vue } from "vue-property-decorator";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Strike,
  Underline
} from "tiptap-extensions";

@Component({
  components: {
    EditorMenuBar,
    EditorContent
  }
})
export default class EditorComponent extends Vue {
  editor: any = new Editor({
    extensions: [
      new Heading({ levels: [2] }),
      new BulletList(),
      new OrderedList(),
      new ListItem(),
      new Bold(),
      new Italic(),
      new Strike(),
      new Underline()
    ],
    content: `Type here...`,
  });

  iconColor(bool: boolean) {
    if (!bool) {
      return "grey";
    }
  }

  printContent() {
    console.log(this.editor.getHTML());
  }

  beforeDestroy() {
    this.editor.destroy();
  }
}

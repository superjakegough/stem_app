import { Component, Vue, Prop } from "vue-property-decorator";
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
  @Prop() content!: string;
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
    content: `<p>Description...</p>`,
    onUpdate: () => {
      this.setContent = this.editor.getHTML();
    }
  });

  set setContent(value: string) {
    this.$emit("content", value);
  }

  iconColor(bool: boolean) {
    if (!bool) {
      return "grey";
    }
  }

  beforeDestroy() {
    this.editor.destroy();
  }
}

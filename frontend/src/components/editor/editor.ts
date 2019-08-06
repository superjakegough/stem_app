import { Component, Vue, Model } from "vue-property-decorator";
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
  @Model("description", { type: String }) syncedDescription!: string;
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
    onUpdate: () => {
      this.syncedDescription = this.editor.getHTML();
      console.log(this.syncedDescription);
    }
  });

  created() {
    console.log("testing" + this.syncedDescription);
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

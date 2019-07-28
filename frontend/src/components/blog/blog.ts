import { Component, Vue } from "vue-property-decorator";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";

@Component({
  components: {
    EditorMenuBar,
    EditorContent
  }
})
export default class BlogComponent extends Vue {
  editor: Editor = new Editor({content: "<p>This is just a boring paragraph</p>"});
  blogs: any[] = [];
  editor: any = new Editor({
    extensions: [
      new Blockquote(),
      new CodeBlock(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3] }),
      new BulletList(),
      new OrderedList(),
      new ListItem(),
      new TodoItem(),
      new TodoList(),
      new Bold(),
      new Code(),
      new Italic(),
      new Link(),
      new Strike(),
      new Underline(),
      new History(),
    ],
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
  });

  beforeDestroy() {
    this.editor.destroy();
  }
}

import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import Blog from "@/models/blog";
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
  @Prop() job!: Job;
  @Prop() blog!: Blog;
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
    content: `<p>Type here...</p>`,
    onUpdate: () => {
      const html = this.editor.getHTML();
      this.job ? this.job.description = html : this.blog.content = html;
    }
  });

  setContent() {
    if (this.job) {
      console.log("here");
      return this.job.description;
    } else if (this.blog) {
      return this.blog.content;
    }
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

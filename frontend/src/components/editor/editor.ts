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
    onUpdate: () => {
      const html = this.editor.getHTML();
      this.job ? this.job.description = html : this.blog.content = html;
    }
  });

  mounted() {
    if (this.job) {
      if (this.job.description.length > 1) {
        this.editor.setContent(this.job.description);
      }
    } else if (this.blog) {
      if (this.blog.content.length > 1) {
        this.editor.setContent(this.blog.content);
      }
    } else {
      this.editor.setContent("<p>Type here...</p>");
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

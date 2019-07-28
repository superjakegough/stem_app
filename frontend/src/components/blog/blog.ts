import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor";

@Component({
  components: {
    Editor
  }
})
export default class BlogComponent extends Vue {
  blogs: any[] = [];
}

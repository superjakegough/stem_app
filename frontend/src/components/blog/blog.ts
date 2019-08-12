import { Component, Vue } from "vue-property-decorator";
import Blog from "@/models/blog";
import { getBlog } from "@/services/blog_service";

@Component
export default class BlogComponent extends Vue {
  blog: Blog = {
    blogId: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  };
  loading: boolean = false;

  async mounted() {
    this.loading = true;
    const res = await getBlog(this.$router.currentRoute.params.id);
    if (res) {
      this.blog = res;
    }
    this.loading = false;
  }
}

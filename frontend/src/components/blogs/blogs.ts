import { Component, Vue } from "vue-property-decorator";
import Blog from "@/models/blog";
import { getAllBlogs } from "@/services/blog_service";

@Component
export default class BlogsComponent extends Vue {
  date: string = new Date().toISOString();
  blogs: any[] = [];
  loading: boolean = false;
  filteredBlogs: Blog[] = [];
  page: number = 1;
  blogsPerPage: number = 3;
  blogsPages: number = 0;
  blogsPaged: Blog[] = [];
  searchTerm: string = "";

  async mounted() {
    this.loading = true;
    const res = await getAllBlogs();
    if (res) {
      this.blogs = res;
    }
    this.onSearch();
    this.loading = false;
  }

  onPageChange() {
    this.blogsPages = Math.ceil(this.filteredBlogs.length / this.blogsPerPage);
    this.blogsPaged = this.filteredBlogs.slice((this.page - 1) * this.blogsPerPage, (this.page) * this.blogsPerPage);
  }

  onSearch() {
    const regex = new RegExp(`^.*${this.searchTerm}.*$`, "i");
    this.page = 1;
    if (!this.searchTerm) {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter(blog => regex.test(blog.title));
    }
    this.onPageChange();
  }

  convertDate(timestamp: string) {
    const date: Date = new Date(timestamp);
    return date.toLocaleDateString("en-GB");
  }

  openRoute(id: string) {
    this.$router.push({ path: `/blog/${id}` });
  }
}

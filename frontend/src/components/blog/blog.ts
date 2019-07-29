import { Component, Vue } from "vue-property-decorator";
import Blog from "@/models/blog";
import { getAllBlogs } from "@/services/blog_service";

@Component
export default class BlogsComponent extends Vue {
  date: string = new Date().toISOString();
  blogs: Blog[] = [];

  filteredBlogs: Blog[] = [];
  page: number = 1;
  blogsPerPage: number = 3;
  blogsPages: number = 0;
  blogsPaged: Blog[] = [];
  searchTerm: string = "";

  async mounted() {
    const res = await getAllBlogs();
    this.blogs = res;
    this.onSearch();
  }

  onPageChange() {
    this.blogsPages = Math.ceil(this.filteredBlogs.length / this.blogsPerPage);
    this.blogsPaged = this.filteredBlogs.slice((this.page - 1) * this.blogsPerPage, (this.page) * this.blogsPerPage);
  }

  onSearch() {
    this.page = 1;
    if (this.searchTerm === "") {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter(blog => blog.title.includes(this.searchTerm));
    }
    this.onPageChange();
  }
}

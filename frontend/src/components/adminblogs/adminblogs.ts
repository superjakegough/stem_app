import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor";
import Blog from "@/models/blog";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "@/services/blog_service";

@Component({
  components: {
    Editor
  }
})
export default class AdminBlogsComponent extends Vue {
  $refs!: { createForm: HTMLFormElement, updateForm: HTMLFormElement };
  date: string = new Date().toISOString();
  blogs: Blog[] = [];
  blog: Blog = {
    _id: "",
    title: "",
    description: "",
    content: "",
    createdAt: "",
    updatedAt: ""
  };
  loading: boolean = false;
  search: string = "";
  createDialog: boolean = false;
  updateDialog: boolean = false;
  deleteDialog: boolean = false;
  error: boolean = false;
  errorMessage: string = "";
  headers: any[] = [
    { text: "Title", value: "title" },
    { text: "Description", value: "salary" },
    { text: "Actions", value: "action", sortable: false }
  ];
  rules: object = {
    required: (value: string) => !!value || "Required"
  };

  mounted() {
    this.getBlogs();
  }

  async getBlogs() {
    this.loading = true;
    const res = await getAllBlogs();
    this.blogs = res;
    this.loading = false;
  }

  createShow() {
    this.blog = {
      _id: "",
      title: "",
      description: "",
      content: "",
      createdAt: "",
      updatedAt: ""
    };
    this.createDialog = true;
  }

  async create() {
    console.log(this.blog.content);
    if (this.$refs.createForm.validate()) {
      const res = await createBlog(this.blog);
      if (!res.success) {
        this.errorMessage = "Failed to create blog!";
        this.error = true;
      } else {
        this.blogs.push(this.blog);
      }
      this.createDialog = false;
    }
  }

  updateShow(selected: Blog) {
    this.blog = JSON.parse(JSON.stringify(selected));
    this.updateDialog = true;
  }

  async update() {
    if (this.$refs.updateForm.validate()) {
      const res = await updateBlog(this.blog);
      if (!res.success) {
        this.errorMessage = "Failed to update blog!";
        this.error = true;
      } else {
        let tempBlog = this.blogs.find(i => i._id === this.blog._id);
        tempBlog = this.blog;
      }
      this.updateDialog = false;
      this.getBlogs();
    }
  }

  deleteShow(selected: Blog) {
    this.blog = selected;
    this.deleteDialog = true;
  }

  async deletee() {
    const res = await deleteBlog(this.blog._id);
    if (!res.success) {
      this.errorMessage = "Failed to delete blog!";
      this.error = true;
    } else {
      this.blogs = this.blogs.filter(i => i._id !== this.blog._id);
    }
    this.deleteDialog = false;
  }

  createReset() {
    this.$refs.createForm.reset();
  }

  updateReset() {
    this.$refs.updateForm.reset();
  }
}

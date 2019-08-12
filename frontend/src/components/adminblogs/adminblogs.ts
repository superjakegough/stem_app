import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor";
import Blog from "@/models/blog";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "@/services/blog_service";
import { Auth } from "aws-amplify";

@Component({
  components: {
    Editor
  }
})
export default class AdminBlogsComponent extends Vue {
  $refs!: { createForm: HTMLFormElement, updateForm: HTMLFormElement, authForm: HTMLFormElement };
  email: string = "";
  password: string = "";
  signingIn: boolean = false;
  authorised: boolean = false;
  date: string = new Date().toISOString();
  blogs: Blog[] = [];
  blog: Blog = {
    blogId: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
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

  async signIn() {
    if (this.$refs.authForm.validate()) {
      this.signingIn = true;
      try {
        await Auth.signIn(this.email, this.password);
        this.authorised = true;
        this.getBlogs();
      } catch (e) {
        console.log(e);
      }
      this.signingIn = false;
    }
  }

  async getBlogs() {
    this.loading = true;
    const res = await getAllBlogs();
    if (!res) {
      this.errorMessage = "Failed to get blogs!";
      this.error = true;
    } else {
      this.blogs = res;
    }
    this.loading = false;
  }

  createShow() {
    this.blog = {
      blogId: "",
      title: "",
      description: "",
      content: "",
      createdAt: ""
    };
    this.createDialog = true;
  }

  async create() {
    if (this.$refs.createForm.validate() && this.blog.content.length > 0) {
      const res = await createBlog(this.blog);
      if (!res.status) {
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
      if (!res.status) {
        this.errorMessage = "Failed to update blog!";
        this.error = true;
      } else {
        let tempBlog = this.blogs.find(i => i.blogId === this.blog.blogId);
        tempBlog = this.blog;
      }
      this.updateDialog = false;
    }
  }

  deleteShow(selected: Blog) {
    this.blog = selected;
    this.deleteDialog = true;
  }

  async deletee() {
    const res = await deleteBlog(this.blog.blogId);
    if (!res.status) {
      this.errorMessage = "Failed to delete blog!";
      this.error = true;
    } else {
      this.blogs = this.blogs.filter(i => i.blogId !== this.blog.blogId);
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

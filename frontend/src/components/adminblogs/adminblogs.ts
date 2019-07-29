import { Component, Vue } from "vue-property-decorator";
import Blog from "@/models/blog";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "@/services/blog_service";

@Component
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
    { text: "Description", value: "description" },
    { text: "Actions", value: "action", sortable: false }
  ];
  rules: object = {
    required: (value: string) => !!value || "Required"
  };

  async mounted() {
    this.loading = true;
    const res = await getAllBlogs();
    console.log(res);
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

  create() {
    if (this.$refs.createForm.validate()) {
      createBlog(this.blog);
    }
  }

  updateShow(selected: Blog) {
    this.blog = selected;
    this.updateDialog = true;
  }

  update() {
    if (this.$refs.updateForm.validate()) {
      updateBlog(this.blog);
    }
  }

  deleteShow(selected: Blog) {
    this.blog = selected;
    this.deleteDialog = true;
  }

  deletee() {
    deleteBlog(this.blog._id);
  }

  createReset() {
    this.$refs.createForm.reset();
  }

  updateReset() {
    this.$refs.updateForm.reset();
  }
}

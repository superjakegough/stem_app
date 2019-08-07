import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor";
import Job from "@/models/job";
import { getAllJobs, createJob, updateJob, deleteJob } from "@/services/job_service";

@Component({
  components: {
    Editor
  }
})
export default class AdminJobsComponent extends Vue {
  $refs!: { createForm: HTMLFormElement, updateForm: HTMLFormElement };
  date: string = new Date().toISOString();
  jobs: Job[] = [];
  job: Job = {
    _id: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    location: "",
    reference: "",
    description: "",
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
    { text: "Salary", value: "salary" },
    { text: "Benefits", value: "benefits" },
    { text: "Type", value: "jobType" },
    { text: "Location", value: "location" },
    { text: "Reference", value: "reference" },
    { text: "Actions", value: "action", sortable: false }
  ];
  rules: object = {
    required: (value: string) => !!value || "Required"
  };

  mounted() {
    this.getJobs();
  }

  async getJobs() {
    this.loading = true;
    const res = await getAllJobs();
    this.jobs = res;
    this.loading = false;
  }

  createShow() {
    this.job = {
      _id: "",
      title: "",
      salary: "",
      benefits: "",
      jobType: "",
      location: "",
      reference: "",
      description: "",
      createdAt: "",
      updatedAt: ""
    };
    this.createDialog = true;
  }

  async create() {
    if (this.$refs.createForm.validate() && this.job.description.length > 0) {
      const res = await createJob(this.job);
      if (!res.success) {
        this.errorMessage = "Failed to create job!";
        this.error = true;
      } else {
        this.jobs.push(this.job);
      }
      this.createDialog = false;
    }
  }

  updateShow(selected: Job) {
    this.job = JSON.parse(JSON.stringify(selected));
    this.updateDialog = true;
  }

  async update() {
    if (this.$refs.updateForm.validate()) {
      const res = await updateJob(this.job);
      if (!res.success) {
        this.errorMessage = "Failed to update job!";
        this.error = true;
      } else {
        let tempJob = this.jobs.find(i => i._id === this.job._id);
        tempJob = this.job;
      }
      this.updateDialog = false;
      this.getJobs();
    }
  }

  deleteShow(selected: Job) {
    this.job = selected;
    this.deleteDialog = true;
  }

  async deletee() {
    const res = await deleteJob(this.job._id);
    if (!res.success) {
      this.errorMessage = "Failed to delete job!";
      this.error = true;
    } else {
      this.jobs = this.jobs.filter(i => i._id !== this.job._id);
    }
    this.deleteDialog = false;
  }

  createReset() {
    this.$refs.createForm.reset();
  }

  updateReset() {
    this.$refs.updateForm.reset();
  }

  updateDescription(content: string) {
    this.job.description = content;
  }
}

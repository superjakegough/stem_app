import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor";
import Job from "@/models/job";
import { getAllJobs, createJob, updateJob, deleteJob } from "@/services/job_service";
import { Auth } from "aws-amplify";

@Component({
  components: {
    Editor
  }
})
export default class AdminJobsComponent extends Vue {
  $refs!: { createForm: HTMLFormElement, updateForm: HTMLFormElement, authForm: HTMLFormElement };
  email: string = "";
  password: string = "";
  signingIn: boolean = false;
  authorised: boolean = false;
  date: string = new Date().toISOString();
  jobs: Job[] = [];
  job: Job = {
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    jobLocation: "",
    jobReference: "",
    description: "",
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

  async signIn() {
    if (this.$refs.authForm.validate()) {
      this.signingIn = true;
      try {
        await Auth.signIn(this.email, this.password);
        this.authorised = true;
        this.getJobs();
      } catch (e) {
        console.log(e);
      }
      this.signingIn = false;
    }
  }

  async getJobs() {
    this.loading = true;
    const res = await getAllJobs();
    if (!res) {
      this.errorMessage = "Failed to get jobs!";
      this.error = true;
    } else {
      this.jobs = res;
    }
    this.loading = false;
  }

  createShow() {
    this.job = {
      jobId: "",
      title: "",
      salary: "",
      benefits: "",
      jobType: "",
      jobLocation: "",
      jobReference: "",
      description: "<p>Type here...</p>",
      createdAt: ""
    };
    this.createDialog = true;
  }

  async create() {
    if (this.$refs.createForm.validate() && this.job.description.length > 0) {
      const res = await createJob(this.job);
      if (!res.title) {
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
      if (!res.status) {
        this.errorMessage = "Failed to update job!";
        this.error = true;
      } else {
        let tempJob = this.jobs.find(i => i.jobId === this.job.jobId);
        tempJob = this.job;
      }
      this.updateDialog = false;
    }
  }

  deleteShow(selected: Job) {
    this.job = selected;
    this.deleteDialog = true;
  }

  async deletee() {
    const res = await deleteJob(this.job.jobId);
    if (!res.status) {
      this.errorMessage = "Failed to delete job!";
      this.error = true;
    } else {
      this.jobs = this.jobs.filter(i => i.jobId !== this.job.jobId);
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

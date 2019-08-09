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
  $refs!: { createForm: HTMLFormElement, updateForm: HTMLFormElement };
  email: string = "admin@example.com";
  password: string = "StemPa55!";
  authorised: boolean = false;
  date: string = new Date().toISOString();
  jobs: Job[] = [];
  job: Job = {
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    location: "",
    reference: "",
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

  async mounted() {
    await this.signIn();
    if (this.authorised) {
      this.getJobs();
    }
  }

  async signIn() {
    try {
      console.log(Auth);
      const res = await Auth.signIn(this.email, this.password);
      console.log("testing" + res);
      this.authorised = true;
    } catch (e) {
      console.log(e);
    }
  }

  async getJobs() {
    this.loading = true;
    const res = await getAllJobs();
    console.log(res);
    this.jobs = res;
    this.loading = false;
  }

  createShow() {
    this.job = {
      jobId: "",
      title: "",
      salary: "",
      benefits: "",
      jobType: "",
      location: "",
      reference: "",
      description: "",
      createdAt: ""
    };
    this.createDialog = true;
  }

  async create() {
    if (this.$refs.createForm.validate() && this.job.description.length > 0) {
      const res = await createJob(this.job);
      console.log(res);
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
      console.log(res);
      if (!res.success) {
        this.errorMessage = "Failed to update job!";
        this.error = true;
      } else {
        let tempJob = this.jobs.find(i => i.jobId === this.job.jobId);
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
    const res = await deleteJob(this.job.jobId);
    console.log(res);
    if (!res.success) {
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

  updateDescription(content: string) {
    this.job.description = content;
  }
}

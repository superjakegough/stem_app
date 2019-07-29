import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getAllJobs, createJob, updateJob, deleteJob } from "@/services/job_service";

@Component
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

  async mounted() {
    this.loading = true;
    const res = await getAllJobs();
    console.log(res);
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

  create() {
    if (this.$refs.createForm.validate()) {
      createJob(this.job);
    }
  }

  updateShow(selected: Job) {
    this.job = selected;
    this.updateDialog = true;
  }

  update() {
    if (this.$refs.updateForm.validate()) {
      updateJob(this.job);
    }
  }

  deleteShow(selected: Job) {
    this.job = selected;
    this.deleteDialog = true;
  }

  deletee() {
    deleteJob(this.job._id);
  }

  createReset() {
    this.$refs.createForm.reset();
  }

  updateReset() {
    this.$refs.updateForm.reset();
  }
}

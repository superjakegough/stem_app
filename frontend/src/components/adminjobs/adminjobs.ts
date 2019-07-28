import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getAllJobs } from "@/services/job-service";
import CreateJobDialog from "./dialogs/createjob/createjob";
import UpdateJobDialog from "./dialogs/updatejob/updatejob";
import DeleteJobDialog from "./dialogs/deletejob/deletejobs";

@Component({
  components: {
    CreateJobDialog,
    UpdateJobDialog,
    DeleteJobDialog
  }
})
export default class AdminJobsComponent extends Vue {
  jobs: Job[] = [];
  selectedJob: Job = {
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
  dialogs: any = {
    createShow: false,
    updateShow: false,
    deleteShow: false
  };
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

  async mounted() {
    this.loading = true;
    const res = await getAllJobs();
    console.log(res);
    this.jobs = res;
    this.loading = false;
  }

  updateJob(selected: Job) {
    this.selectedJob = selected;
    this.dialogs.updateShow = true;
  }

  deleteJob(selected: Job) {
    this.selectedJob = selected;
    this.dialogs.deleteShow = true;
  }

}

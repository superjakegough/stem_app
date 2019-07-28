import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getAllJobs } from "@/services/job-service";
import CreateJobDialog from "./dialogs/createjob/createjob";
import UpdateJobDialog from "./dialogs/updateJob/updateJob";
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
  selectedJob!: Job;
  loading: boolean = false;
  search: string = "";
  createShow: boolean = false;
  updateShow: boolean = false;
  deleteShow: boolean = false;
  error: boolean = false;
  errorMessage: string = "";

  async mounted() {
    this.loading = true;
    const res = await getAllJobs();
    this.jobs = res;
    this.loading = false;
  }

  updateJob(selected: Job) {
    this.selectedJob = selected;
    this.updateShow = true;
  }

  deleteJob(selected: Job) {
    this.selectedJob = selected;
    this.deleteShow = true;
  }

}

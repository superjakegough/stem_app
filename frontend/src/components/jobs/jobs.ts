import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getS3Jobs } from "@/services/job_service";

@Component
export default class JobsComponent extends Vue {
  date: string = new Date().toISOString();
  jobs: Job[] = [];

  filteredJobs: Job[] = [];
  page: number = 1;
  jobsPerPage: number = 3;
  jobsPages: number = 0;
  jobsPaged: Job[] = [];
  searchTerm: string = "";

  async mounted() {
    const res = await getS3Jobs();
    if (Array.isArray(res)) {
      this.jobs = res;
    } else {
      this.jobs.push(res);
    }
    this.onSearch();
  }

  onPageChange() {
    this.jobsPages = Math.ceil(this.filteredJobs.length / this.jobsPerPage);
    this.jobsPaged = this.filteredJobs.slice((this.page - 1) * this.jobsPerPage, (this.page) * this.jobsPerPage);
  }

  onSearch() {
    this.page = 1;
    if (this.searchTerm === "") {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter(job => job.title.includes(this.searchTerm));
    }
    this.onPageChange();
  }
}

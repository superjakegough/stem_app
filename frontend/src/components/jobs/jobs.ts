import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getAllJobs } from "@/services/job_service";

@Component
export default class JobsComponent extends Vue {
  date: string = new Date().toISOString();
  jobs: any[] = [];
  loading: boolean = false;
  filteredJobs: Job[] = [];
  page: number = 1;
  jobsPerPage: number = 3;
  jobsPages: number = 0;
  jobsPaged: Job[] = [];
  searchTerm: string = "";

  async mounted() {
    this.loading = true;
    const res = await getAllJobs();
    if (res) {
      this.jobs = res;
    }
    this.onSearch();
    this.loading = false;
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
      this.filteredJobs = this.jobs.filter(job => job.title.s.includes(this.searchTerm));
    }
    this.onPageChange();
  }

  openRoute(id: string) {
    this.$router.push({ path: `/job/${id}` });
  }
}

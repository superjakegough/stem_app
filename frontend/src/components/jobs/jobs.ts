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
  searchDialog: boolean = false;
  job: Job = {
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    jobLocation: "",
    jobReference: "",
    description: "",
    jobFilled: "",
    createdAt: ""
  };
  salaries: string[] = [
    "£20,000+",
    "£25,000+",
    "£30,000+",
    "£35,000+",
    "£40,000+",
    "£45,000+",
    "£50,000+",
  ];
  benefits: string[] = [];
  jobTypes: string[] = [];
  jobLocations: string[] = [];

  async mounted() {
    this.loading = true;
    const res = await getAllJobs();
    if (res) {
      this.jobs = res;
      this.populateSets();
      this.onSearch();
    }
    this.loading = false;
  }

  onPageChange() {
    this.jobsPages = Math.ceil(this.filteredJobs.length / this.jobsPerPage);
    this.jobsPaged = this.filteredJobs.slice((this.page - 1) * this.jobsPerPage, (this.page) * this.jobsPerPage);
  }

  onSearch() {
    this.page = 1;
    this.generateSearchTerm();
    if (this.searchTerm) {
      this.filteredJobs = this.jobs.filter(job => this.checkJob(job));
    } else {
      this.filteredJobs = this.jobs;
    }
    this.onPageChange();
    this.searchDialog = false;
  }

  populateSets() {
    const benefitsSet: Set<string> = new Set<string>();
    const jobTypesSet: Set<string> = new Set<string>();
    const jobLocationsSet: Set<string> = new Set<string>();

    for (let i = 0; i < this.jobs.length; i++) {
      benefitsSet.add(this.jobs[i].benefits);
      jobTypesSet.add(this.jobs[i].jobType);
      jobLocationsSet.add(this.jobs[i].jobLocation);
    }
    this.benefits = [...benefitsSet];
    this.jobTypes = [...jobTypesSet];
    this.jobLocations = [...jobLocationsSet];
  }

  checkJob(checkJob: Job) {
    const regex = new RegExp(`^.*${this.job.title}.*$`, "i");
    if (this.job.title) {
      if (!regex.test(checkJob.title)) {
        return false;
      }
    }
    if (this.job.salary) {
      const checkJobSalary: number = parseInt(checkJob.salary.replace(/[£,+]/g, ""));
      const thisJobSalaray: number = parseInt(this.job.salary.replace(/[£,+]/g, ""));
      if (checkJobSalary < thisJobSalaray) {
        return false;
      }
    }
    if (this.job.benefits) {
      if (checkJob.benefits !== this.job.benefits) {
        return false;
      }
    }
    if (this.job.jobType) {
      if (checkJob.jobType !== this.job.jobType) {
        return false;
      }
    }
    if (this.job.jobLocation) {
      if (checkJob.jobLocation !== this.job.jobLocation) {
        return false;
      }
    }
    return true;
  }

  generateSearchTerm() {
    this.searchTerm = "";
    if (this.job.title) {
      this.searchTerm += this.job.title + " ";
    }
    if (this.job.salary) {
      this.searchTerm += this.job.salary + " ";
    }
    if (this.job.benefits) {
      this.searchTerm += this.job.benefits + " ";
    }
    if (this.job.jobType) {
      this.searchTerm += this.job.jobType + " ";
    }
    if (this.job.jobLocation) {
      this.searchTerm += this.job.jobLocation + " ";
    }
  }

  openRoute(id: string) {
    this.$router.push({ path: `/job/${id}` });
  }
}

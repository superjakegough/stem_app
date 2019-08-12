import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { getJob } from "@/services/job_service";

@Component
export default class JobComponent extends Vue {
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

  async mounted() {
    this.loading = true;
    const res = await getJob(this.$router.currentRoute.params.id);
    if (res) {
      this.job = res;
    }
    this.loading = false;
  }
}

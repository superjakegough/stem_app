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

  async mounted() {
    const res = await getJob(this.$router.currentRoute.params.id);
    console.log(res);
  }
}

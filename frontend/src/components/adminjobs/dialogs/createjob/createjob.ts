import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import { createJob } from "@/services/job-service";

@Component
export default class CreateJobDialogComponent extends Vue {
  @Prop() show: boolean = false;
  $refs!: { form: HTMLFormElement };
  date: string = new Date().toISOString();
  failed: boolean = false;
  job: Job = {
    _id: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    location: "",
    reference: "",
    description: "",
    createdAt: this.date,
    updatedAt: this.date
  };

  create() {
    if (this.$refs.form.validate()) {
      createJob(this.job);
    }
  }

  clear() {
    this.$refs.form.reset();
  }

  cancel() {
    this.show = false;
  }
}

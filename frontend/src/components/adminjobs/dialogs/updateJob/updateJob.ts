import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import { updateJob } from "@/services/job-service";

@Component
export default class UpdateJobDialogComponent extends Vue {
  @Prop() show: boolean = false;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = "";
  @Prop() job!: Job;
  $refs!: { form: HTMLFormElement };
  date: string = new Date().toISOString();
  failed: boolean = false;

  async update() {
    if (this.$refs.form.validate()) {
      this.job.updatedAt = this.date;
      const res = await updateJob(this.job);
      console.log(res);
    }
  }

  clear() {
    this.$refs.form.reset();
  }

  cancel() {
    this.show = false;
  }
}

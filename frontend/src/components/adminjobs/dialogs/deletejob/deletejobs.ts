import { Component, Vue, Prop } from "vue-property-decorator";
import { deleteJob } from "@/services/job-service";

@Component
export default class DeleteJobDialogComponent extends Vue {
  @Prop() show: boolean = false;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = "";
  @Prop() jobId: string = "";

  delete() {
    deleteJob(this.jobId);
  }

  cancel() {
    this.show = false;
  }
}

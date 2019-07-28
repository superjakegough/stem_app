import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import { deleteJob } from "@/services/job-service";

@Component
export default class DeleteJobDialogComponent extends Vue {
  @Prop() dialogs!: any;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = "";
  @Prop() job!: Job;

  async deletee() {
    const res = await deleteJob(this.job._id);
    console.log(res);
  }

  cancel() {
    this.dialogs.deleteShow = false;
  }
}

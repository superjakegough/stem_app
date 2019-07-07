import { Component, Vue } from "vue-property-decorator";

@Component
export default class ServiceComponent extends Vue {
  stepper: number = 1;

  next() {
    if (this.stepper == 5) {
      this.stepper = 1;
    } else {
      this.stepper++;
    }
  }

  prev() {
    if (this.stepper != 1) {
      this.stepper--;
    }
  }
}
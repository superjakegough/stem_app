import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
  clientPanel: boolean[] = [true];
  candidatePanel: boolean[] = [false];

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  getBackground(panel: boolean) {
    if (panel) {
      return "#B9F6CA";
    } else {
      return "transparent";
    }
  }
}

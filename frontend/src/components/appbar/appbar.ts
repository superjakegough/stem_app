import { Component, Vue, Prop } from "vue-property-decorator";
import MenuItem from "@/models/menu_item";

@Component
export default class AppBarComponent extends Vue {
  @Prop() menuItems!: MenuItem[];
  linkedIn: string = "https://www.linkedin.com/company/stem-skills-recruitment-ltd/";

  openUrl(url: string) {
    window.open(url);
  }
}

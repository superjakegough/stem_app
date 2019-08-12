import { Component, Vue, Prop } from "vue-property-decorator";
import MenuItem from "@/models/menu_item";

@Component
export default class AppBarComponent extends Vue {
  @Prop() menuItems!: MenuItem[];
  linkedIn: string = "https://www.linkedin.com/company/stem-skills-recruitment-ltd/";
  facebook: string = "https://www.facebook.com/Stem-Skills-Recruitment-Ltd-107387030612608";

  openUrl(url: string) {
    window.open(url);
  }
}

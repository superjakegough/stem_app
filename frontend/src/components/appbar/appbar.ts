import { Component, Vue, Prop } from "vue-property-decorator";
import MenuItem from "@/models/menu_item";

@Component
export default class AppBarComponent extends Vue {
  @Prop() menuItems!: MenuItem[];
  linkedIn: string = "https://linkedin.com/company/stem-skills-recruitment-ltd/";
  facebook: string = "https://facebook.com/Stem-Skills-Recruitment-Ltd-107387030612608";
  twitter: string = "https://twitter.com/StemRecruitLtd";
  instagram: string = "https://instagram.com/stemskillsrecruitment";

  openUrl(url: string) {
    window.open(url);
  }
}

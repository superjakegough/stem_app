import { Component, Vue } from "vue-property-decorator";
import { MenuItem } from "@/models/menu_item";
import AppBar from "@/components/appbar/appbar";

@Component({
  components: {
    AppBar
  }
})
export default class AppComponent extends Vue {
  bottomNav: string = "home";

  menuItems: MenuItem[] = [
    new MenuItem("Home", "home", "/"),
    new MenuItem("Services", "pages", "/services"),
    new MenuItem("Biography", "person", "/biography"),
    new MenuItem("Blog", "portrait", "/blog")
  ];
}
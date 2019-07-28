import { Component, Vue } from "vue-property-decorator";

@Component
export default class BlogComponent extends Vue {
  blogs: any[] = [];
}

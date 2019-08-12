import { Component, Vue } from "vue-property-decorator";

@Component
export default class JobComponent extends Vue {
  mounted() {
    console.log(this.$router.currentRoute.params.id);
  }
}

import Vue from "vue";
import "@/plugins/aws-amplify";
import "@/plugins/vuetify";
import App from "@/components/app/app.vue";
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");




import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

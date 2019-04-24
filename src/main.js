import Vue from "vue";
import Element from "element-ui";
import Vuebar from "vuebar";
import App from "@/App.vue";
import router from "@/router/";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/element-variables.scss";
// import store from '@/store/';
Vue.config.productionTip = false;

Vue.use(Vuebar);
Vue.use(Element);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");

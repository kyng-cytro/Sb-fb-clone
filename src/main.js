import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import FullpageModal from 'vue-fullpage-modal';
Vue.use(FullpageModal);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

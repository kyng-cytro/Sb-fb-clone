import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import FullpageModal from 'vue-fullpage-modal';
Vue.use(FullpageModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

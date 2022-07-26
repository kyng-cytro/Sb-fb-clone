import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

Vue.config.productionTip = false;

import FullpageModal from 'vue-fullpage-modal';

Vue.use(FullpageModal);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  data: {
    fbLiteEnabled: null, // Global variable to track if Facebook Lite is enabled or not.
  },
  render: (h) => h(App),
}).$mount("#app");

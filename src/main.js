// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/index.js";
import utils from "./utils/utils.js";
import "normalize.css";
import "./assets/sass/index.scss";
import "amfe-flexible/index.js";
import "amfe-flexible";
import Vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.use(utils);
Vue.use(Vant);
Vue.prototype.HOST = "/nodeServer";

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default vue;
